const colorPalette = document.getElementById('color-palette');

// const color1 = document.createElement('div');
// color1.className = 'color';
// colorPalette.appendChild(color1);

// const color2 = document.createElement('div');
// color2.className = 'color';
// colorPalette.appendChild(color2);

// const color3 = document.createElement('div');
// color3.className = 'color';
// colorPalette.appendChild(color3);

// const color4 = document.createElement('div');
// color4.className = 'color';
// colorPalette.appendChild(color4);

// color1.style.backgroundColor = 'black'; border = '1px solid black'; 
// color2.style.backgroundColor = 'red'; border = '1px solid black';
// color3.style.backgroundColor = 'blue'; border = '1px solid black';
// color4.style.backgroundColor = 'green'; border = '1px solid black';



// const paletaDeCores = document.getElementsByClassName("color")
for (let index = 0; index <= 3; index += 1) {
    const color = document.createElement('div');
    color.className = "color";
    colorPalette.appendChild(color);
    color.style.border = '1px solid black';
    color.style.width = '100px';
    color.style.height = '100px';
    color.style.backgroundColor = 'black';
    color.style.display = "inline-block";
    
    // for (let index = 1; index <= color; index += 1) {
    //     if () {
    //         index[1] = (color.style.backgroundColor = "red");
    //     }
    // }
}





