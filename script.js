const color = document.getElementsByClassName('color')[0];
color.style.backgroundColor = 'black';

const color1 = document.getElementsByClassName('color')[1];
color1.style.backgroundColor = 'red';

const color2 = document.getElementsByClassName('color')[2];
color2.style.backgroundColor = 'green';

const color3 = document.getElementsByClassName('color')[3];
color3.style.backgroundColor = 'blue';

const colorPalette = document.getElementsByClassName('color');

const criaCor = () => {
  const red = parseInt(Math.random() * 255, 10);
  const green = parseInt(Math.random() * 255, 10);
  const blue = parseInt(Math.random() * 255, 10);
  return `rgb(${red},${green},${blue})`;
};

const mudaCor = () => {
  const coresSalvas = [];
  for (let i = 0; i < colorPalette.length; i += 1) {
    if (i === 0) {
      colorPalette[0].style.backgroundColor = 'rgb(0,0,0)';
    } else {
      colorPalette[i].style.backgroundColor = criaCor();
    }
    coresSalvas.push(colorPalette[i].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(coresSalvas));
};

const randomColor = document.getElementById('button-random-color');
randomColor.addEventListener('click', mudaCor);

const recuperandoCor = JSON.parse(localStorage.getItem('colorPalette'));
const recuperaCor = () => {
  if (recuperandoCor !== null) {
    for (let i = 0; i < colorPalette.length; i += 1) {
      colorPalette[i].style.backgroundColor = recuperandoCor[i];
    }
  }
};

recuperaCor();

// REQUISITO 6
// criar um id pixel-board OK
// chamar o pixel-board no .js OK
// criar 25 classes denominadas pixel dentro de pixel-boadr usando um for OK
// cada pixel deve ser quadrado e branco OK
// deve ser uma sequência de 5 pixel na horizontal e 5 pixel na vertical
// o quadro de pixel deve aparecer abaixo da paleta

const pixelBoard = document.getElementById('pixel-board');

const criaPixel = () => {
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
};

criaPixel();
