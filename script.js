// Data persistence
const defaultGroups = [
    {
        id: "nid_1",
        name: "Nivel 1 (Básico)",
        questions: [
            {q: "¿Cuál es el planeta más grande del sistema solar?", opts: ["Tierra", "Saturno", "Júpiter", "Marte"], correct: 2},
            {q: "¿Cuántos continentes hay en la Tierra?", opts: ["5", "6", "7", "8"], correct: 2},
            {q: "¿Qué gas respiran principalmente los humanos para vivir?", opts: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Hidrógeno"], correct: 1},
            {q: "¿Cuánto es 7 × 8?", opts: ["54", "56", "58", "64"], correct: 1},
            {q: "¿Cuál es el océano más grande del mundo?", opts: ["Atlántico", "Índico", "Pacífico", "Ártico"], correct: 2},
            {q: "¿Cuál es el hueso más largo del cuerpo humano?", opts: ["Húmero", "Fémur", "Tibia", "Radio"], correct: 1},
            {q: "¿En qué país se encuentra la Torre Eiffel?", opts: ["Italia", "Francia", "Alemania", "España"], correct: 1},
            {q: "¿Cuántos días tiene un año bisiesto?", opts: ["365", "366", "364", "360"], correct: 1},
            {q: "¿Qué instrumento mide la temperatura?", opts: ["Barómetro", "Termómetro", "Anemómetro", "Higrómetro"], correct: 1},
            {q: "¿Cuál es el resultado de 100 ÷ 4?", opts: ["20", "25", "30", "40"], correct: 1},
            {q: "¿Cuál es el metal cuyo símbolo químico es Fe?", opts: ["Plata", "Hierro", "Oro", "Cobre"], correct: 1},
            {q: "¿Cuál es el idioma más hablado del mundo por hablantes nativos?", opts: ["Inglés", "Español", "Mandarín", "Hindi"], correct: 2},
            {q: "¿Cuántos lados tiene un hexágono?", opts: ["5", "6", "7", "8"], correct: 1},
            {q: "¿Qué planeta es conocido como el “planeta rojo”?", opts: ["Venus", "Marte", "Júpiter", "Mercurio"], correct: 1},
            {q: "¿Cuál es el animal terrestre más rápido?", opts: ["León", "Guepardo", "Tigre", "Antílope"], correct: 1}
        ]
    },
    {
        id: "nid_2",
        name: "Nivel 2 (Básico-Medio)",
        questions: [
            {q: "¿Cuál es el río más largo del mundo?", opts: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"], correct: 1},
            {q: "¿Cuántos planetas hay en el sistema solar?", opts: ["7", "8", "9", "10"], correct: 1},
            {q: "¿Qué órgano bombea la sangre en el cuerpo humano?", opts: ["Pulmón", "Cerebro", "Corazón", "Hígado"], correct: 2},
            {q: "¿Cuál es el resultado de 9²?", opts: ["18", "72", "81", "90"], correct: 2},
            {q: "¿Qué país tiene más población del mundo?", opts: ["India", "Estados Unidos", "China", "Indonesia"], correct: 0},
            {q: "¿Cuál es el idioma oficial de Brasil?", opts: ["Español", "Portugués", "Inglés", "Francés"], correct: 1},
            {q: "¿Cuántos huesos tiene el cuerpo humano adulto aproximadamente?", opts: ["180", "206", "220", "250"], correct: 1},
            {q: "¿Qué planeta está más cerca del Sol?", opts: ["Venus", "Tierra", "Mercurio", "Marte"], correct: 2},
            {q: "¿Cuál es el resultado de 15 × 3?", opts: ["30", "40", "45", "50"], correct: 2},
            {q: "¿Qué continente es el más grande?", opts: ["África", "Europa", "Asia", "América"], correct: 2},
            {q: "¿Cuál es el símbolo químico del oro?", opts: ["Ag", "Au", "O", "Go"], correct: 1},
            {q: "¿Cuántos minutos tiene una hora?", opts: ["50", "60", "70", "100"], correct: 1},
            {q: "¿Qué animal es conocido por tener una memoria muy desarrollada?", opts: ["Perro", "Elefante", "Gato", "Caballo"], correct: 1},
            {q: "¿Cuál es el resultado de 144 ÷ 12?", opts: ["10", "11", "12", "14"], correct: 2},
            {q: "¿Qué gas es el más abundante en la atmósfera terrestre?", opts: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Helio"], correct: 1}
        ]
    },
    {
        id: "nid_3",
        name: "Nivel 3 (Medio)",
        questions: [
            {q: "¿Quién pintó la Mona Lisa?", opts: ["Picasso", "Da Vinci", "Van Gogh", "Dalí"], correct: 1},
            {q: "¿Cuál es el país más grande del mundo?", opts: ["China", "Canadá", "Rusia", "EE.UU."], correct: 2},
            {q: "¿En qué año llegó el hombre a la Luna?", opts: ["1969", "1965", "1971", "1959"], correct: 0},
            {q: "¿Cuál es el símbolo químico de la Plata?", opts: ["Pt", "Au", "Ag", "Pl"], correct: 2},
            {q: "¿Quién escribió 'Don Quijote de la Mancha'?", opts: ["Lope de Vega", "Quevedo", "Cervantes", "Góngora"], correct: 2},
            {q: "¿Cuál es el océano más frío?", opts: ["Atlántico", "Índico", "Antártico", "Ártico"], correct: 3},
            {q: "¿Cuál es la capital de Australia?", opts: ["Sídney", "Melbourne", "Canberra", "Perth"], correct: 2},
            {q: "¿Qué tipo de animal es la ballena azul?", opts: ["Pez", "Mamífero", "Crustáceo", "Anfibio"], correct: 1},
            {q: "¿En qué continente está Egipto?", opts: ["Asia", "África", "Europa", "Oceanía"], correct: 1},
            {q: "¿Dónde originaron los juegos olímpicos?", opts: ["Roma", "Grecia", "Egipto", "Persia"], correct: 1},
            {q: "¿Qué material de los siguientes es el más duro?", opts: ["Acero", "Titanio", "Diamante", "Grafeno"], correct: 2},
            {q: "¿Cuál es la raíz cuadrada de 144?", opts: ["11", "12", "13", "14"], correct: 1},
            {q: "¿Qué gas principal absorben las plantas para la fotosíntesis?", opts: ["Oxígeno", "Dióxido de Carbono", "Nitrógeno", "Metano"], correct: 1},
            {q: "¿Cuál es el planeta más brillante visto desde la Tierra?", opts: ["Marte", "Júpiter", "Venus", "Saturno"], correct: 2},
            {q: "¿Qué país europeo tiene forma de bota?", opts: ["Grecia", "España", "Italia", "Portugal"], correct: 2}
        ]
    },
    {
        id: "nid_4",
        name: "Nivel 4 (Difícil)",
        questions: [
            {q: "¿Quién formuló la teoría de la relatividad?", opts: ["Newton", "Tesla", "Einstein", "Galileo"], correct: 2},
            {q: "¿Cuál es el hueso más pequeño del cuerpo humano?", opts: ["Yunque", "Martillo", "Estribo", "Falange"], correct: 2},
            {q: "¿Cuál es la capital de Islandia?", opts: ["Oslo", "Estocolmo", "Helsinki", "Reikiavik"], correct: 3},
            {q: "¿Quién dirigió la película 'El Padrino'?", opts: ["Spielberg", "Scorsese", "Coppola", "Tarantino"], correct: 2},
            {q: "¿En qué país está la región de Transilvania?", opts: ["Hungría", "Rumanía", "Bulgaria", "Serbia"], correct: 1},
            {q: "¿En qué año cayó el Muro de Berlín?", opts: ["1989", "1991", "1987", "1990"], correct: 0},
            {q: "¿Cuál es el lago más profundo del mundo?", opts: ["Tanganica", "Superior", "Victoria", "Baikal"], correct: 3},
            {q: "¿Cuál es la montaña más alta de África?", opts: ["Atlas", "Everest", "Kilimanjaro", "Elbrus"], correct: 2},
            {q: "¿En qué año comenzó la Segunda Guerra Mundial?", opts: ["1938", "1939", "1941", "1945"], correct: 1},
            {q: "¿Cómo se llama el proceso por el cual una oruga es mariposa?", opts: ["Mutación", "Evolución", "Metamorfosis", "Transición"], correct: 2},
            {q: "¿Qué divisa oficial se utiliza en el país de Japón?", opts: ["Yuan", "Won", "Yen", "Baht"], correct: 2},
            {q: "¿Qué estructura del ojo humano define su color?", opts: ["Pupila", "Córnea", "Retina", "Iris"], correct: 3},
            {q: "¿Quién pintó el famoso cuadro expresionista 'El Grito'?", opts: ["Munch", "Dalí", "Picasso", "Monet"], correct: 0},
            {q: "¿En qué año se disolvió la Unión Soviética?", opts: ["1989", "1990", "1991", "1992"], correct: 2},
            {q: "¿Cómo se llama el miedo irracional a los espacios cerrados?", opts: ["Aracnofobia", "Agorafobia", "Claustrofobia", "Acrofobia"], correct: 2}
        ]
    },
    {
        id: "nid_5",
        name: "Nivel 5 (Extremo)",
        questions: [
            {q: "¿Cuál es la fosa oceánica más profunda del planeta?", opts: ["Fosa de Java", "Fosa de las Marianas", "Fosa de Tonga", "Fosa de Puerto Rico"], correct: 1},
            {q: "¿Qué científica/o descubrió accidentalmente la penicilina?", opts: ["Pasteur", "Fleming", "Koch", "Curie"], correct: 1},
            {q: "¿Cuál es el estado más extenso en área de los Estados Unidos?", opts: ["Texas", "California", "Alaska", "Montana"], correct: 2},
            {q: "¿Qué científico introdujo la selección natural junto a Darwin?", opts: ["Lamarck", "Mendel", "Wallace", "Huxley"], correct: 2},
            {q: "¿A qué sustancia se denomina oficialmente vitamina B12?", opts: ["Riboflavina", "Biotina", "Cobalamina", "Tiamina"], correct: 2},
            {q: "¿Qué Maravilla del Mundo Antiguo aún sigue en pie?", opts: ["Jardines Babilonia", "Faro de Alejandría", "Coloso de Rodas", "Pirámide de Guiza"], correct: 3},
            {q: "¿De qué animal proviene la auténtica leche del queso mozzarella original?", opts: ["Vaca", "Cabra", "Oveja", "Búfala"], correct: 3},
            {q: "¿Cuál es el mineral más duro cuantificado en la escala de Mohs?", opts: ["Corindón", "Topacio", "Diamante", "Cuarzo"], correct: 2},
            {q: "¿Quién fue el primer emperador en la historia del imperio romano?", opts: ["Julio César", "Augusto", "Nerón", "Calígula"], correct: 1},
            {q: "¿Qué imperio precolombino sudamericano construyó Machu Picchu?", opts: ["Maya", "Azteca", "Olmeca", "Inca"], correct: 3},
            {q: "¿Cuál es el elemento químico más frecuente y abundante del universo?", opts: ["Helio", "Oxígeno", "Carbono", "Hidrógeno"], correct: 3},
            {q: "¿Cuál es el río más caudaloso (mayor volumen) del mundo?", opts: ["Nilo", "Amazonas", "Congo", "Misisipi"], correct: 1},
            {q: "¿Quién fue la primera mujer galardonada con un Premio Nobel?", opts: ["Rosalind Franklin", "Marie Curie", "Lise Meitner", "Ada Lovelace"], correct: 1},
            {q: "¿Cuál es la capital de Nueva Zelanda?", opts: ["Sídney", "Auckland", "Wellington", "Canberra"], correct: 2},
            {q: "¿Quién es el dios griego que rige sobre el inframundo?", opts: ["Ares", "Apolo", "Hades", "Poseidón"], correct: 2}
        ]
    }
];

let gameData = JSON.parse(localStorage.getItem('concursito_jan_data'));

// Migración desde base de datos antigua a v2 (grupos) o nueva instalación
if (!gameData || !Array.isArray(gameData) || !gameData[0].id) {
    gameData = defaultGroups;
    saveData();
}

function saveData() {
    localStorage.setItem('concursito_jan_data', JSON.stringify(gameData));
}

let activeQuestions = [];
let currentEditGroupId = gameData[0]?.id;
let playingGroupId = null;

// App navigation
const app = {
    login: () => {
        const input = document.getElementById('login-pass').value;
        const target = [147, 147, 147, 171, 147, 150, 153, 156, 159, 162];
        
        let valid = input.length === target.length;
        if(valid) {
            for(let i = 0; i < input.length; i++) {
                if(input.charCodeAt(i) * 3 !== target[i]) valid = false;
            }
        }
        
        if (valid) {
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
};

// Editor
const editor = {
    render: () => {
        const select = document.getElementById('edit-group-select');
        select.innerHTML = gameData.map(g => `<option value="${g.id}" ${g.id === currentEditGroupId ? 'selected' : ''}>${g.name}</option>`).join('');
        
        const group = gameData.find(g => g.id === currentEditGroupId);
        const list = document.getElementById('questions-list');
        
        if (!group || group.questions.length === 0) {
            list.innerHTML = '<p>No hay preguntas guardadas en este grupo.</p>';
            return;
        }
        
        list.innerHTML = group.questions.map((q, i) => `
            <div class="q-item">
                <div class="q-text"><b>${i+1}.</b> ${q.q}</div>
                <button class="btn-danger small-btn" onclick="editor.delete(${i})">Borrar</button>
            </div>
        `).join('');
    },
    onSelectGroup: () => {
        currentEditGroupId = document.getElementById('edit-group-select').value;
        editor.render();
    },
    newGroup: () => {
        const name = prompt("Nombre del nuevo grupo:");
        if (name) {
            const newGroup = { id: 'g_' + Date.now(), name, questions: [] };
            gameData.push(newGroup);
            currentEditGroupId = newGroup.id;
            saveData();
            editor.render();
        }
    },
    deleteGroup: () => {
        if (gameData.length <= 1) return alert("No puedes borrar el único grupo que tienes.");
        if (confirm("¿Seguro que quieres borrar este grupo entero y todas sus preguntas?")) {
            gameData = gameData.filter(g => g.id !== currentEditGroupId);
            currentEditGroupId = gameData[0].id;
            saveData();
            editor.render();
        }
    },
    addQuestion: () => {
        const q = document.getElementById('edit-q').value;
        const opts = [
            document.getElementById('edit-opt0').value,
            document.getElementById('edit-opt1').value,
            document.getElementById('edit-opt2').value,
            document.getElementById('edit-opt3').value,
        ];
        const correct = parseInt(document.getElementById('edit-correct').value);
        
        if(!q || opts.some(o => o.trim() === '')) return alert("Rellena todos los campos.");
        
        const group = gameData.find(g => g.id === currentEditGroupId);
        if(group) {
            group.questions.push({q, opts, correct});
            saveData();
        }
        editor.render();
        
        // Clear forms
        document.getElementById('edit-q').value = '';
        opts.forEach((o, i) => document.getElementById('edit-opt'+i).value = '');
        document.getElementById('edit-correct').value = '0';
    },
    delete: (index) => {
        if(confirm('¿Seguro que quieres borrar esta pregunta?')) {
            const group = gameData.find(g => g.id === currentEditGroupId);
            group.questions.splice(index, 1);
            saveData();
            editor.render();
        }
    }
};

// PeerJS config
const PREFIX = 'concursito-jan-tv-';
let peerInstance = null;
let connection = null;

// Host logic
let currentQIndex = 0;
let currentState = {
    qIndex: 0,
    selected: null,
    revealed: false,
    lifelines: [false, false, false, false],
    rouletteResult: null,
    rouletteState: null,
    eliminatedOptions: [],
    answersHistory: [],
    timerEndTime: null
};

const host = {
    setup: () => {
        if (gameData.length === 0) {
            alert("No hay grupos de preguntas.");
            return app.showView('menu');
        }
        
        const sel = document.getElementById('host-group-select');
        sel.innerHTML = gameData.map(g => `<option value="${g.id}">${g.name} (${g.questions.length} preg.)</option>`).join('');
        
        playingGroupId = sel.value;
        activeQuestions = gameData.find(g => g.id === playingGroupId).questions;
        
        const code = Math.floor(1000 + Math.random() * 9000).toString();
        document.getElementById('host-room-code').innerText = code;
        
        if(peerInstance) peerInstance.destroy();
        peerInstance = new Peer(PREFIX + code);
        
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
        if(currentState.lifelines[0] || currentState.rouletteState) return;
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
        if(currentState.lifelines[1]) return;
        currentState.lifelines[1] = true;
        currentState.timerEndTime = Date.now() + 32000;
        host.renderQ();
        host.sendState();
    },
    play5050: () => {
        if(currentState.lifelines[2]) return;
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
        if(currentState.lifelines[3]) return;
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
            timerEndTime: null
        };
        host.renderQ();
        host.sendState();
    },
    renderQ: () => {
        const q = activeQuestions[currentQIndex];
        if(!q) return;
        
        document.getElementById('host-q-counter').innerText = `Pregunta ${currentQIndex + 1} / ${activeQuestions.length}`;
        document.getElementById('host-current-q').innerHTML = `<b>${q.q}</b>`;
        
        [0, 1, 2, 3].forEach(i => {
            const btn = document.getElementById('btn-h-opt'+i);
            btn.innerText = ['A','B','C','D'][i] + ': ' + q.opts[i];
            
            btn.className = 'opt-btn'; 
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
            const btn = document.getElementById('h-life-'+i);
            if(btn) btn.className = currentState.lifelines[i] ? 'used' : '';
        });
    },
    selectOption: (index) => {
        if (currentState.revealed) return;
        
        if (currentState.selected === index) {
            currentState.selected = null;
        } else {
            currentState.selected = index;
        }
        
        host.renderQ();
        host.sendState();
    },
    revealCorrect: () => {
        if (currentState.revealed) return;
        currentState.revealed = true;
        if (activeQuestions[currentQIndex]) {
            currentState.answersHistory[currentQIndex] = (currentState.selected !== null && currentState.selected === activeQuestions[currentQIndex].correct);
        }
        host.renderQ();
        host.sendState();
    },
    nextQuestion: () => {
        if (activeQuestions[currentQIndex]) {
            currentState.answersHistory[currentQIndex] = (currentState.selected !== null && currentState.selected === activeQuestions[currentQIndex].correct);
        }

        if (currentQIndex < activeQuestions.length - 1) {
            currentQIndex++;
            currentState.qIndex = currentQIndex;
            currentState.selected = null;
            currentState.revealed = false;
            currentState.rouletteResult = null;
            currentState.rouletteState = null;
            currentState.eliminatedOptions = [];
            currentState.timerEndTime = null;
            host.renderQ();
            host.sendState();
        } else {
            if (activeQuestions[currentQIndex]) {
                currentState.answersHistory[currentQIndex] = (currentState.selected !== null && currentState.selected === activeQuestions[currentQIndex].correct);
                host.sendState();
            }
            alert("¡Has llegado a la última pregunta!");
        }
    },
    sendState: () => {
        if(connection) {
            connection.send({
                state: currentState,
                questionData: activeQuestions[currentState.qIndex]
            });
        }
    }
};

// Stream (OBS) logic
const stream = {
    connectToHost: () => {
        const code = document.getElementById('stream-room-input').value;
        if(!code || code.length < 4) return alert("Introduce un código válido (4 números).");
        
        document.getElementById('stream-error').innerText = 'Conectando...';
        document.getElementById('stream-error').style.color = 'white';
        
        if(peerInstance) peerInstance.destroy();
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
        
        const totalQs = 15; // Usually 15, we assume the host sends state but we just stick to 15 bubbles visually
        const progPercent = (state.qIndex / (totalQs - 1)) * 100;
        document.getElementById('s-progress').style.setProperty('--prog-line', `${progPercent}%`);

        [0, 1, 2, 3].forEach(i => {
            const el = document.getElementById('s-life-'+i);
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
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const room = urlParams.get('room');
    if(room) {
        document.getElementById('stream-room-input').value = room;
        stream.connectToHost();
    } else {
        app.showView('login');
    }
});

setInterval(() => {
    if (!document.getElementById('view-stream-game').style.display) return;
    const timerOverlay = document.getElementById('s-timer-overlay');
    if (!timerOverlay || !window.streamState) return;
    
    const endTime = window.streamState.timerEndTime;
    const now = Date.now();
    
    if (endTime && endTime > now) {
        timerOverlay.style.display = 'flex';
        let left = Math.ceil((endTime - now) / 1000);
        if (left > 30) left = 30;
        
        const txtEl = document.getElementById('s-timer-text');
        if (txtEl.innerText != left) txtEl.innerText = left;
        
        if (left <= 5) txtEl.style.color = '#ff5252';
        else txtEl.style.color = 'white';
        
    } else {
        timerOverlay.style.display = 'none';
    }
}, 200);
