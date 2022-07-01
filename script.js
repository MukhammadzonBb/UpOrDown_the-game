const player = document.getElementById('player');
const enemy1 = document.querySelector('.enemy-1');
const enemy2 = document.querySelector('.enemy-2');

document.addEventListener('keydown', function (e) {
    move();
});

let i = 0;

function move() {
    i++;
    if (i % 2 == 0) {
        player.classList.remove('way-2')
        player.classList.remove('move-down')
        player.classList.add('move-up');
        player.classList.add('way-1');
    } else {
        player.classList.remove('way-1')
        player.classList.remove('move-up')
        player.classList.add('move-down');
        player.classList.add('way-2');
    };
};


let isAlive = setInterval(function () {
    let playerPos = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let enemyOnePos = parseInt(window.getComputedStyle(enemy1).getPropertyValue('left'));
    let enemyTwoPos = parseInt(window.getComputedStyle(enemy2).getPropertyValue('left'));
    if (player.classList.contains('way-1') && enemyOnePos > 870 && enemyOnePos < 990 && playerPos == 70) {
        player.innerHTML = ':('
        setTimeout(function () {
            alert('GAME OVER :(')
        }, 12)
    } else if (player.classList.contains('way-2') && enemyTwoPos > 870 && enemyTwoPos < 990 && playerPos == 270) {
        player.innerHTML = ':(';
        setTimeout(function () {
            alert('GAME OVER :(')
        }, 12)
    };
}, 5);
