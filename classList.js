import {btns, computerChoice, playerChoice} from './const.js';

[...btns].forEach((btn) => {
    btn.addEventListener('click', function () {
        playerChoice.classList.remove('animPl');
        computerChoice.classList.remove('animCom');

        setTimeout(() => {
            playerChoice.classList.add('animPl');
            computerChoice.classList.add('animCom');
        }, 2000);
    });
});