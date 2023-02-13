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

const pixelBoard = document.getElementById('pixel-board');

const criaPixel = () => {
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
};

criaPixel();

color.classList.add('selected');

const selecionaCor = () => {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].addEventListener('click', (event) => {
      const corClicada = document.getElementsByClassName('selected')[0];
      corClicada.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
};

selecionaCor();

// 10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.
// O pixel do quadro clicado deve ter sua cor alterada para a cor selecionada na paleta de cores

// O que será testado:

// Ao carregar a página deve ser possível pintar os pixels do quadro de preto;

// Após selecionar outra cor na paleta de cores, é possível pintar os pixels do quadro com essa cor;

// Somente o pixel que foi clicado deve ter a cor alterada, sem influenciar na cor dos demais pixels.

const pixel = document.getElementsByClassName('pixel');

const coloriPixel = () => {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', (event) => {
      const selected = document.getElementsByClassName('selected')[0];
      console.log(selected);
      event.target.style.backgroundColor = selected.style.backgroundColor;
    });
  }
};

coloriPixel();
