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

// 1 criar uma função para criar um click para cada cor da paleta de cores
// 2 a cor clicada deve receber a classe: selected

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

// 9 - Crie uma função para selecionar uma cor na paleta de cores.
// A cor clicada deve ser a única selecionada na paleta de cores.
// A cor clicada deve receber a classe selected e a cor previamente selecionada deve perder esta classe;

// Somente uma das cores da paleta pode ter a classe selected de cada vez;

// Os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.

// O que será testado:

// Somente uma cor da paleta de cores pode ter a classe selected de cada vez;

// Os pixels dentro do quadro não devem ter a classe selected quando são clicados.
