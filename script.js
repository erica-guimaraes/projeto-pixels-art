const color = document.getElementsByClassName('color')[0];
color.style.backgroundColor = 'black';

// const color1 = document.getElementsByClassName('color')[1];
// color1.style.backgroundColor = 'red';

// const color2 = document.getElementsByClassName('color')[2];
// color2.style.backgroundColor = 'blue';

// const color3 = document.getElementsByClassName('color')[3];
// color3.style.backgroundColor = 'green';

// chamar o id color-palette
const colorPalette = document.getElementsByClassName('color');

const criaCor = () => {
  const red = parseInt(Math.random() * 255, 10);
  const green = parseInt(Math.random() * 255, 10);
  const blue = parseInt(Math.random() * 255, 10);
  return `rgb(${red}, ${green}, ${blue})`;
};

const mudaCor = () => {
  for (let i = 1; i < colorPalette.length; i += 1) {
    colorPalette[i].style.backgroundColor = criaCor();
  }
};

const randomColor = document.getElementById('button-random-color');
randomColor.addEventListener('click', mudaCor);


// fazer um for para percorrer o color-palette

// fazer uma função para ter 1 cor aleatória

// const criaCor = () => {
//     let r = Math.random() * 255;
//     let g = Math.random() * 255;
//     let b = Math.random() * 255;
//     return `rgb(${r}, ${g}, ${b})`;
//   };

// guardar 3 cores aleatórias
// determinar cada cor aleatória em uma div color
// chamar a função com as 3 cores no addEventListener

// for(index = 1, index < ) ??????

// const randomColor = document.getElementById('button-random-color');
// randomColor.addEventListener('click', mudaCor);?????

mudaCor();