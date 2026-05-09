import json
import re

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the host object to include jumping, gameover
host_replacement = """const host = {
    setup: () => {
        if (gameData.length === 0) {
            alert("No hay grupos de preguntas.");
            return app.showView('menu');
        }

        const sel = document.getElementById('host-group-select');
        sel.innerHTML = gameData.map(g => `<option value="${g.id}">${g.name} (${g.questions.length} preg.)</option>`).join('');

        playingGroupId = sel.value;
        activeQuestions = gameData.find(g => g.id === playingGroupId).questions;

        let savedCode = localStorage.getItem('concursito_room_code');
        if (!savedCode) {
            savedCode = Math.floor(1000 + Math.random() * 9000).toString();
            localStorage.setItem('concursito_room_code', savedCode);
        }
        document.getElementById('host-room-code').innerText = savedCode;

        if (peerInstance) peerInstance.destroy();
        peerInstance = new Peer(PREFIX + savedCode);

        peerInstance.on('open', id => {
            console.log('Host creado:', id);
            document.getElementById('host-setup-status').innerText = 'Sala creada. Esperando a que OBS se conecte...';
        });

        peerInstance.on('connection', conn => {
            connection = conn;
            document.getElementById('host-setup-status').innerText = '¡OBS Conectado exitosamente!';
            document.getElementById('host-setup-status').style.backgroundColor = '#2e7d32'; // dark green
            document.getElementById('btn-start-host').disabled = false;

            // Re-sync on reload
            if (document.getElementById('view-host-game').style.display === 'block' && activeQuestions.length > 0) {
                host.sendState();
            }
        });

        peerInstance.on('error', err => {
            document.getElementById('host-setup-status').innerText = 'Error: ' + err.type;
            document.getElementById('host-setup-status').style.backgroundColor = '#b71c1c'; // red
        });
    },
    selectGroup: (id) => {
        playingGroupId = id;
        activeQuestions = gameData.find(g => g.id === playingGroupId).questions;
    },
    playRoulette: () => {
        if (currentState.lifelines[0] || currentState.rouletteState) return;
        currentState.lifelines[0] = true;
        currentState.rouletteState = 'spinning';

        const wheelValues = [0, 1, 2, 0, 1, 2, 0, 1, 2, 3];
        const targetIndex = Math.floor(Math.random() * 10);
        const result = wheelValues[targetIndex];

        currentState.rouletteResult = { index: targetIndex, value: result };

        if (activeQuestions[currentQIndex]) {
            let incorrects = [0, 1, 2, 3].filter(i => i !== activeQuestions[currentQIndex].correct && !currentState.eliminatedOptions.includes(i));
            incorrects.sort(() => Math.random() - 0.5);
            currentState.eliminatedOptions.push(...incorrects.slice(0, result));
        }

        host.renderQ();
        host.sendState();

        setTimeout(() => {
            currentState.rouletteState = 'finished';
            host.sendState();
            host.renderQ();
        }, 4500);
    },
    playLlamada: () => {
        if (currentState.lifelines[1]) return;
        currentState.lifelines[1] = true;
        currentState.timerEndTime = Date.now() + 32000;
        host.renderQ();
        host.sendState();
    },
    play5050: () => {
        if (currentState.lifelines[2]) return;
        currentState.lifelines[2] = true;
        if (activeQuestions[currentQIndex]) {
            let incorrects = [0, 1, 2, 3].filter(i => i !== activeQuestions[currentQIndex].correct && !currentState.eliminatedOptions.includes(i));
            incorrects.sort(() => Math.random() - 0.5);
            currentState.eliminatedOptions.push(...incorrects.slice(0, 2));
        }
        host.renderQ();
        host.sendState();
    },
    playDescarte: () => {
        if (currentState.lifelines[3]) return;
        currentState.lifelines[3] = true;
        if (activeQuestions[currentQIndex]) {
            let incorrects = [0, 1, 2, 3].filter(i => i !== activeQuestions[currentQIndex].correct && !currentState.eliminatedOptions.includes(i));
            if (incorrects.length > 0) {
                incorrects.sort(() => Math.random() - 0.5);
                currentState.eliminatedOptions.push(incorrects[0]);
            }
        }
        host.renderQ();
        host.sendState();
    },
    startGame: () => {
        if (activeQuestions.length === 0) {
            alert("El grupo seleccionado no tiene preguntas.");
            return;
        }
        app.showView('host-game');
        currentQIndex = 0;
        currentState = {
            qIndex: 0,
            selected: null,
            revealed: false,
            lifelines: [false, false, false, false],
            rouletteResult: null,
            rouletteState: null,
            eliminatedOptions: [],
            answersHistory: [],
            timerEndTime: null,
            isGameOver: false,
            correctCount: 0,
            incorrectCount: 0
        };
        host.renderQ();
        host.sendState();
    },
    renderQ: () => {
        if (currentState.isGameOver) return;
        const q = activeQuestions[currentQIndex];
        if (!q) return;

        document.getElementById('host-q-counter').innerText = `Pregunta ${currentQIndex + 1} / ${activeQuestions.length}`;
        document.getElementById('host-current-q').innerHTML = `<b>${q.q}</b>`;

        const jumpSelect = document.getElementById('host-jump-q');
        if (jumpSelect) {
            if (jumpSelect.children.length !== activeQuestions.length) {
                jumpSelect.innerHTML = activeQuestions.map((_, i) => `<option value="${i}">Pregunta ${i + 1}</option>`).join('');
            }
            jumpSelect.value = currentQIndex;
        }

        [0, 1, 2, 3].forEach(i => {
            const cb = document.getElementById('elim-' + i);
            if (cb) cb.checked = currentState.eliminatedOptions.includes(i);
            
            const btn = document.getElementById('btn-h-opt' + i);
            btn.innerText = ['A', 'B', 'C', 'D'][i] + ': ' + q.opts[i] + (i === q.correct ? ' ✓ (Correcta)' : '');

            btn.className = 'opt-btn';
            
            if (i === q.correct) {
                btn.style.boxShadow = 'inset 0 0 10px rgba(76, 175, 80, 0.5)';
                btn.style.border = '2px solid #4CAF50';
                btn.style.color = '#a5d6a7';
            } else {
                btn.style.boxShadow = 'none';
                btn.style.border = '2px solid rgba(255,255,255,0.12)';
                btn.style.color = 'white';
            }

            if (currentState.eliminatedOptions && currentState.eliminatedOptions.includes(i) && currentState.rouletteState !== 'spinning') {
                btn.classList.add('used');
                btn.style.opacity = '0.3';
                btn.style.pointerEvents = 'none';
            } else {
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            }

            if (currentState.revealed) {
                if (i === q.correct) {
                    btn.classList.add('correct');
                } else if (i === currentState.selected && currentState.selected !== q.correct) {
                    btn.classList.add('incorrect');
                }
            } else {
                if (i === currentState.selected) {
                    btn.classList.add('selected');
                }
            }
        });

        [0, 1, 2, 3].forEach(i => {
            const btn = document.getElementById('h-life-' + i);
            if (btn) btn.className = currentState.lifelines[i] ? 'used' : '';
        });
    },
    selectOption: (index) => {
        if (currentState.revealed || currentState.isGameOver) return;

        if (currentState.selected === index) {
            currentState.selected = null;
        } else {
            currentState.selected = index;
        }

        host.renderQ();
        host.sendState();
    },
    revealCorrect: () => {
        if (currentState.revealed || currentState.isGameOver) return;
        currentState.revealed = true;
        if (activeQuestions[currentQIndex]) {
            currentState.answersHistory[currentQIndex] = (currentState.selected !== null && currentState.selected === activeQuestions[currentQIndex].correct);
        }
        host.renderQ();
        host.sendState();
    },
    initQuestionState: () => {
        currentState.qIndex = currentQIndex;
        currentState.selected = null;
        currentState.revealed = false;
        currentState.rouletteResult = null;
        currentState.rouletteState = null;
        currentState.eliminatedOptions = [];
        currentState.timerEndTime = null;
        host.renderQ();
        host.sendState();
    },
    prevQuestion: () => {
        if (currentQIndex > 0) {
            currentQIndex--;
            host.initQuestionState();
        }
    },
    jumpToQuestion: (index) => {
        index = parseInt(index);
        if (index >= 0 && index < activeQuestions.length) {
            currentQIndex = index;
            host.initQuestionState();
        }
    },
    toggleEliminate: (optIndex) => {
        if (currentState.eliminatedOptions.includes(optIndex)) {
            currentState.eliminatedOptions = currentState.eliminatedOptions.filter(i => i !== optIndex);
        } else {
            currentState.eliminatedOptions.push(optIndex);
        }
        host.renderQ();
        host.sendState();
    },
    nextQuestion: () => {
        if (currentState.isGameOver) return;

        if (activeQuestions[currentQIndex] && !currentState.revealed) {
            // Si no reveló antes de cambiar, no puntuamos o marcamos false? 
            // Better to force reveal or assume incorrect.
            currentState.answersHistory[currentQIndex] = (currentState.selected !== null && currentState.selected === activeQuestions[currentQIndex].correct);
        }

        if (currentQIndex < activeQuestions.length - 1) {
            currentQIndex++;
            host.initQuestionState();
        } else {
            // FIN DEL JUEGO
            let corrects = 0;
            let incorrects = 0;
            for (let i = 0; i < activeQuestions.length; i++) {
                if (currentState.answersHistory[i]) corrects++;
                else incorrects++;
            }
            currentState.isGameOver = true;
            currentState.correctCount = corrects;
            currentState.incorrectCount = incorrects;
            host.sendState();
            
            document.getElementById('host-current-q').innerHTML = `<h2 style="color:#a5d6a7;">¡Has Ganado!</h2><p>Aciertos: ${corrects} | Fallos: ${incorrects}</p>`;
        }
    },
    sendState: () => {
        if (connection) {
            connection.send({
                state: currentState,
                questionData: activeQuestions[currentState.qIndex]
            });
        }
    }
};"""

stream_replacement = """const stream = {
    connectToHost: () => {
        const code = document.getElementById('stream-room-input').value;
        if (!code || code.length < 4) return alert("Introduce un código válido (4 números).");
        localStorage.setItem('concursito_last_room', code);

        document.getElementById('stream-error').innerText = 'Conectando...';
        document.getElementById('stream-error').style.color = 'white';

        if (peerInstance) peerInstance.destroy();
        peerInstance = new Peer();

        peerInstance.on('open', () => {
            connection = peerInstance.connect(PREFIX + code);

            connection.on('open', () => {
                app.showView('stream-game');

                connection.on('data', data => {
                    stream.renderUpdate(data);
                });
            });

            connection.on('error', err => {
                document.getElementById('stream-error').innerText = 'Error al conectar con el Host.';
                document.getElementById('stream-error').style.color = '#ff5252';
            });
        });

        peerInstance.on('error', err => {
            document.getElementById('stream-error').innerText = 'No se encontró la sala ' + code;
            document.getElementById('stream-error').style.color = '#ff5252';
        });
    },
    renderUpdate: (data) => {
        const { state, questionData } = data;
        window.streamState = state;
        
        if (state.isGameOver) {
            document.getElementById('s-gameover-overlay').style.display = 'flex';
            document.getElementById('s-go-correct').innerText = state.correctCount;
            document.getElementById('s-go-incorrect').innerText = state.incorrectCount;
            return;
        } else {
            document.getElementById('s-gameover-overlay').style.display = 'none';
        }

        const totalQs = 15; // Usually 15, we assume the host sends state but we just stick to 15 bubbles visually
        const progPercent = (state.qIndex / (totalQs - 1)) * 100;
        document.getElementById('s-progress').style.setProperty('--prog-line', `${progPercent}%`);

        [0, 1, 2, 3].forEach(i => {
            const el = document.getElementById('s-life-' + i);
            if (state.lifelines[i]) el.classList.add('used');
            else el.classList.remove('used');
        });

        const rOverlay = document.getElementById('s-roulette-overlay');
        const rWheel = document.getElementById('r-wheel');
        if (state.rouletteState === 'spinning') {
            rOverlay.style.display = 'flex';
            if (state.rouletteResult) {
                // Ensure transition isn't skipped on display:none to display:flex
                rWheel.style.transition = 'none';
                rWheel.style.transform = 'rotate(0deg)';
                void rWheel.offsetWidth; // Force CSS flush

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        rWheel.style.transition = 'transform 4s cubic-bezier(0.15, 0.85, 0.2, 1)';
                        const targetRot = - (360 * 5) - (state.rouletteResult.index * 36 + 18);
                        rWheel.style.transform = `rotate(${targetRot}deg)`;
                    });
                });
            }
        } else if (state.rouletteState === 'finished') {
            rOverlay.style.display = 'none';
        } else {
            rOverlay.style.display = 'none';
            rWheel.style.transition = 'none';
            rWheel.style.transform = `rotate(0deg)`;
            void rWheel.offsetWidth;
            rWheel.style.transition = 'transform 4s cubic-bezier(0.15, 0.85, 0.2, 1)';
        }

        const progEl = document.getElementById('s-progress');
        let progHtml = '';
        for (let i = 0; i < totalQs; i++) {
            let cls = 'progress-step';
            if (i < state.qIndex) {
                cls += state.answersHistory[i] ? ' correct' : ' incorrect';
            }
            else if (i === state.qIndex) {
                if (state.revealed && state.answersHistory && typeof state.answersHistory[i] !== 'undefined') {
                    cls += state.answersHistory[i] ? ' correct' : ' incorrect';
                } else {
                    cls += ' current';
                }
            }
            else cls += ' empty';

            progHtml += `<div class="${cls}">${i + 1}</div>`;
        }
        progEl.innerHTML = progHtml;

        document.getElementById('s-question').innerText = questionData.q;

        [0, 1, 2, 3].forEach(i => {
            const optEl = document.getElementById('s-opt' + i);
            optEl.querySelector('.text').innerText = questionData.opts[i];

            optEl.className = 'option';

            if (state.eliminatedOptions && state.eliminatedOptions.includes(i) && state.rouletteState !== 'spinning') {
                optEl.classList.add('eliminated');
            }

            if (state.revealed) {
                if (i === questionData.correct) {
                    optEl.classList.add('correct');
                } else if (i === state.selected && state.selected !== questionData.correct) {
                    optEl.classList.add('incorrect');
                }
            } else {
                if (i === state.selected) {
                    optEl.classList.add('selected');
                }
            }
        });
    }
};"""

app_replacement = """const app = {
    login: () => {
        const input = document.getElementById('login-pass').value;
        const target = [147, 147, 147, 171, 147, 150, 153, 156, 159, 162];

        let valid = input.length === target.length;
        if (valid) {
            for (let i = 0; i < input.length; i++) {
                if (input.charCodeAt(i) * 3 !== target[i]) valid = false;
            }
        }

        if (valid) {
            const remember = document.getElementById('login-remember');
            if (remember && remember.checked) {
                localStorage.setItem('concursito_logged_in', 'true');
            }
            app.showView('menu');
            document.getElementById('login-pass').value = '';
            document.getElementById('login-error').style.display = 'none';
        } else {
            document.getElementById('login-error').style.display = 'block';
        }
    },
    showView: (viewId) => {
        document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
        document.getElementById('view-' + viewId).style.display = 'block';
        if (viewId === 'stream-game') {
            document.body.classList.add('chroma-bg-active');
        } else {
            document.body.classList.remove('chroma-bg-active');
        }
    },
    showAndSetup: (viewId) => {
        app.showView(viewId);
        if (viewId === 'host-setup') host.setup();
        if (viewId === 'editor') editor.render();
    }
};"""

eventListener_replacement = """document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const room = urlParams.get('room');
    if (room) {
        document.getElementById('stream-room-input').value = room;
        stream.connectToHost();
    } else {
        const lastRoom = localStorage.getItem('concursito_last_room');
        if (lastRoom) document.getElementById('stream-room-input').value = lastRoom;
        
        if (localStorage.getItem('concursito_logged_in') === 'true') {
            app.showView('menu');
        } else {
            app.showView('login');
        }
    }
});"""

# Use regex to replace the sections
text = re.sub(r'const host = \{.*?\n\};\n\n// Stream \(OBS\) logic', host_replacement + '\n\n// Stream (OBS) logic', text, flags=re.DOTALL)
text = re.sub(r'const stream = \{.*?\n\};\n\ndocument\.addEventListener\(\'DOMContentLoaded\'', stream_replacement + '\n\ndocument.addEventListener(\'DOMContentLoaded\'', text, flags=re.DOTALL)
text = re.sub(r'const app = \{.*?\n\};\n\n// Editor', app_replacement + '\n\n// Editor', text, flags=re.DOTALL)
text = re.sub(r'document\.addEventListener\(\'DOMContentLoaded\', \(\) => \{.*?\n\}\);\n\nsetInterval\(', eventListener_replacement + '\n\nsetInterval(', text, flags=re.DOTALL)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(text)
