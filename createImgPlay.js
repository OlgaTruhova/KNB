import {playerChoice} from './const.js';

function createImgPlay (im) {
    setTimeout(() => {
        playerChoice.removeChild(document.getElementById(`imgPl${im}`));
    }, 1500)
    
    const imgSrc = ['./img/kamen_levo.png', './img/nojnici_levo.png', './img/bumaga_levo.png'];
    const img = document.createElement('img');
    img.src = imgSrc[im];
    img.alt = "img";
    img.id = `imgPl${im}`;
    return img;
}

export {createImgPlay};