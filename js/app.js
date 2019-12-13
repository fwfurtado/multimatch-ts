"use strict";
const startButton = document.querySelector('#startGame');
const messageElement = document.querySelector('#messages');
const startGame = () => {
    messageElement.innerHTML = 'Welcome to MultiMatch! Starting new game...';
};
startButton.addEventListener('click', startGame);
//# sourceMappingURL=app.js.map