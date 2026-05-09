import re

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update playRoulette
old_roulette = """    playRoulette: () => {
        if (currentState.lifelines[0] || currentState.rouletteState) return;
        currentState.lifelines[0] = true;
        currentState.rouletteState = 'spinning';

        const wheelValues = [0, 1, 2, 0, 1, 2, 0, 1, 2, 3];
        const targetIndex = Math.floor(Math.random() * 10);
        const result = wheelValues[targetIndex];"""

new_roulette = """    playRoulette: () => {
        if (currentState.lifelines[0] || currentState.rouletteState) return;
        currentState.lifelines[0] = true;
        currentState.rouletteState = 'spinning';

        const wheelValues = [0, 1, 2, 0, 1, 2, 0, 1, 2, 3];
        let targetIndex = Math.floor(Math.random() * 10);
        let result = wheelValues[targetIndex];

        const trollVal = document.getElementById('troll-roulette-val').value;
        if (trollVal !== 'auto') {
            const desired = parseInt(trollVal);
            // Find an index that matches the desired result
            const possibleIndices = [];
            for (let i = 0; i < wheelValues.length; i++) {
                if (wheelValues[i] === desired) possibleIndices.push(i);
            }
            if (possibleIndices.length > 0) {
                targetIndex = possibleIndices[Math.floor(Math.random() * possibleIndices.length)];
                result = desired;
            }
        }"""

text = text.replace(old_roulette, new_roulette)

# 2. Add god mode functions inside host
god_funcs = """    forceCorrect: (index) => {
        if (activeQuestions[currentQIndex]) {
            activeQuestions[currentQIndex].correct = index;
            host.renderQ();
            host.sendState();
        }
    },
    reviveLifelines: () => {
        currentState.lifelines = [false, false, false, false];
        host.renderQ();
        host.sendState();
    },
    modifyTime: (secs) => {
        if (currentState.timerEndTime && currentState.timerEndTime > Date.now()) {
            currentState.timerEndTime += secs * 1000;
        } else if (secs > 0) {
            currentState.timerEndTime = Date.now() + (secs * 1000);
        }
        host.sendState();
    },
    triggerConfetti: () => {
        currentState.confetti = Date.now();
        host.sendState();
    },
    triggerBlackout: () => {
        if (!currentState.blackout) currentState.blackout = Date.now();
        else currentState.blackout = null; // Toggle
        host.sendState();
    },
    sendState: () => {"""

text = text.replace("    sendState: () => {", god_funcs)

# 3. Handle stream updates for confetti & blackout
stream_update = """        if (state.isGameOver) {
            document.getElementById('s-gameover-overlay').style.display = 'flex';
            document.getElementById('s-go-correct').innerText = state.correctCount;
            document.getElementById('s-go-incorrect').innerText = state.incorrectCount;
            return;
        } else {
            document.getElementById('s-gameover-overlay').style.display = 'none';
        }"""

stream_update_new = """        if (state.isGameOver) {
            document.getElementById('s-gameover-overlay').style.display = 'flex';
            document.getElementById('s-go-correct').innerText = state.correctCount;
            document.getElementById('s-go-incorrect').innerText = state.incorrectCount;
            return;
        } else {
            document.getElementById('s-gameover-overlay').style.display = 'none';
        }

        const blackout = document.getElementById('s-blackout');
        if (state.blackout) blackout.style.display = 'flex';
        else blackout.style.display = 'none';

        const confetti = document.getElementById('s-confetti');
        if (state.confetti && Date.now() - state.confetti < 5000) {
            confetti.style.display = 'block';
        } else {
            confetti.style.display = 'none';
        }"""

text = text.replace(stream_update, stream_update_new)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(text)
