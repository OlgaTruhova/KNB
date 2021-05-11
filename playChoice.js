import {btns, playerChoice} from './const.js';
import {createImgPlay} from './createImgPlay.js';

[...btns].forEach((btn) => {
    btn.addEventListener('click', playChoice);
});

function playChoice (e) {

    if(e.path[1].id === "rock") {
        playerChoice.append(createImgPlay(0));
    } else if(e.path[1].id === "scissors") {
        playerChoice.append(createImgPlay(1));
    } else if (e.path[1].id === "paper") {
        playerChoice.append(createImgPlay(2));
    }
}