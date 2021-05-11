import {computerChoice} from './const.js';

function createImgComp (im) {
    setTimeout(() => {
        computerChoice.removeChild(document.getElementById(`imgCom${im}`));
    }, 1500)
    
    const imgSrc = ['./img/kamen.png', './img/nojnici.png', './img/bumaga.png'];
    const img = document.createElement('img');
    img.src = imgSrc[im];
    img.alt = "img";
    img.id = `imgCom${im}`;
    return img;
}

export {createImgComp};