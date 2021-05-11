import {btns, computerChoice} from './const.js';
import {createImgComp} from './createImgComp.js';


[...btns].forEach((btn) => {
    btn.addEventListener('click', compChoice);
});

function compChoice () {
    const rand = Math.round(Math.random()*2);
    computerChoice.append(createImgComp(rand));
}