const btns = document.getElementsByTagName('button'); 
const playerChoice = document.getElementById('player-choice'); 
const computerChoice = document.getElementById('computer-choice'); 


[...btns].forEach((btn) => {
    btn.addEventListener('click', compChoice);
});

[...btns].forEach((btn) => {
    btn.addEventListener('click', playChoice);
});

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

[...btns].forEach((btn) => {
    btn.addEventListener('click', winner);
});


function compChoice () {
    const rand = Math.round(Math.random()*2);
    computerChoice.append(createImgComp(rand));
}

function playChoice (e) {

    if(e.path[1].id === "rock") {
        playerChoice.append(createImgPlay(0));
    } else if(e.path[1].id === "scissors") {
        playerChoice.append(createImgPlay(1));
    } else if (e.path[1].id === "paper") {
        playerChoice.append(createImgPlay(2));
    }
}

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

function countPl () {
    let counter = 1;
    return (data) => {
        if (data) {
            counter = data;
        } else {
            if (counter !== 10) {
                return counter++;
            } else {
                [...btns].forEach((b) => {
                    b.disabled = true;
                })
                messageResult.textContent = 'Поздравляю! Вы выиграли!';
                creatRestartBtn();
                return counter;
            }
        }
    }
}
const winnerPlayer = countPl();

function countCom () {
    let counter = 1;
    return (data) => {
        if (data) {
            counter = data;
        } else {
            if (counter !== 10) {
                return counter++;
            } else {
                [...btns].forEach((b) => {
                    b.disabled = true;
                })
                messageResult.textContent = 'Увы! Вы проиграли!';
                creatRestartBtn();
                return counter;
            }
        }
    }
}
const winnerComp = countCom();

function winner () {
    
    if (playerChoice.children[0].id === 'imgPl0') {
        if (computerChoice.children[0].id === 'imgCom1') {
            scorePl.textContent = winnerPlayer();
           
        } else if (computerChoice.children[0].id === 'imgCom2') {
            scoreCom.textContent = winnerComp();
        }
    } else if (playerChoice.children[0].id === 'imgPl2') {
        if (computerChoice.children[0].id === 'imgCom0') {
            scorePl.textContent = winnerPlayer();
        } else if (computerChoice.children[0].id === 'imgCom1') {
            scoreCom.textContent = winnerComp();
        }
    } else if (playerChoice.children[0].id === 'imgPl1') {
        if (computerChoice.children[0].id === 'imgCom2') {
            scorePl.textContent = winnerPlayer();
        } else if (computerChoice.children[0].id === 'imgCom0') {
            scoreCom.textContent = winnerComp();
        }
    }
}

function creatRestartBtn (counter) {
    const restartWrapper = document.getElementById('restart-wrapper');
    const div = document.createElement('div');
    restartWrapper.append(div);
    div.id = 'restart';
    
    const span = document.createElement('span');
    div.append(span);
    span.textContent = 'Играть ещё?';

    const restart = document.getElementById('restart');
    restart.addEventListener('click', function() {
        [...btns].forEach((b) => {
            b.disabled = false;
        })
        messageResult.textContent = 'Сделайте свой выбор!';
        
        scorePl.textContent = 0;
        scoreCom.textContent = 0;

        winnerPlayer(1);
        winnerComp(1);

        restart.remove();
    })
}