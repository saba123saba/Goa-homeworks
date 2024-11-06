const parentDiv = document.getElementById('parent');
const boxDiv = document.getElementById('box');

let pleft = 0;
let ptop = 0;

function MovieBox() {
    if (pleft >= 150) {
        pleft -= 1;
    } else if (pleft < 150){
        pleft += 1;
    }

    boxDiv.style.left = `${pleft}px`;
}

setInterval(MovieBox, 20);