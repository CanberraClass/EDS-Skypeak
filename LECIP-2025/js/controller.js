
let currentScreen = 'home-screen';
let currentCode = '0';
let currentExtra = '0';
let currentScreenCode = '0';
let screenFilter = '';

let operators = ['TTSG']
let operatorIndex = operators.map((e, i) => i)


function onreturnPressed() {
    if (currentScreen == 'set-screen') {
        setScreen('home-screen');
        drawSelectionScreen(currentCode, 'dest');
    }
}

function onLeftPressed() {
    if (currentScreen === 'controller-screen-dest' || currentScreen === 'controller-screen-extra') {
        let allCodes = getCodes(currentScreen === 'controller-screen-dest' ? EDSData : EDSExtras);

        let currentCodeIndex = allCodes.indexOf(currentScreenCode);
        currentCodeIndex = Math.max(currentCodeIndex - 1, 0);

        currentScreenCode = allCodes[currentCodeIndex];

        drawSelectionScreen(currentScreenCode, currentScreen === 'controller-screen-dest' ? 'dest' : 'extra');
    } else if (currentScreen === 'controller-screen-operator') {
        let allCodes = operatorIndex.filter(code => code.toString().startsWith(screenFilter));

        let currentCodeIndex = allCodes.indexOf(currentScreenCode);
        currentCodeIndex = Math.max(currentCodeIndex - 1, 0);

        currentScreenCode = allCodes[currentCodeIndex];

        drawOperatorSelectionScreen(currentScreenCode);
    }
}

function onRightPressed() {
    if (currentScreen === 'controller-screen-dest' || currentScreen === 'controller-screen-extra') {
        let allCodes = getCodes(currentScreen === 'controller-screen-dest' ? EDSData : EDSExtras);

        let currentCodeIndex = allCodes.indexOf(currentScreenCode);
        currentCodeIndex = Math.min(currentCodeIndex + 1, allCodes.length - 1);

        currentScreenCode = allCodes[currentCodeIndex];

        drawSelectionScreen(currentScreenCode, currentScreen === 'controller-screen-dest' ? 'dest' : 'extra');
    } else if (currentScreen === 'controller-screen-operator') {
        let allCodes = operatorIndex.filter(code => code.toString().startsWith(screenFilter));

        let currentCodeIndex = allCodes.indexOf(currentScreenCode);
        currentCodeIndex = Math.min(currentCodeIndex + 1, allCodes.length - 1);

        currentScreenCode = allCodes[currentCodeIndex];

        drawOperatorSelectionScreen(currentScreenCode);
    }
}

function onNumberPressed {
    if (currentScreen === 'home-screen' || currentScreen === 'set-screen') {
        currentScreen = 'set-screen';
        inputs.shift();
        inputs.push(key);

        showRouteInput();
    }
}

window.addEventListener('load', () => {
    document.getElementById('keypad-return').addEventListener('click', onF3Pressed);
    document.getElementById('keypad-set').addEventListener('click', onF3Pressed);
    document.getElementById('keypad-left').addEventListener('click', onLeftPressed);
    document.getElementById('keypad-right').addEventListener('click', onRightPressed);

    for (let i = 0; i <= 9; i++) {
        document.getElementById('keypad-' + i).addEventListener('click', onNumberPressed.bind(null, i));
    }

    document.addEventListener('keydown', event => {
        let keybinds = {
            'Left': onLeftPressed,
            'Right': onRightPressed,
            'Return': onreturnpressed,
            'SET': onSetPressed
        }
        if (keybinds[event.key]) {
            event.preventDefault()
            keybinds[event.key]()
        } else if (!isNaN(event.key) && !(event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)) {
            event.preventDefault()
            onNumberPressed(event.key)
        }
    })
});
