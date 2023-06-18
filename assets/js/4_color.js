let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let alert = document.querySelector('#alert');
let color = 'grey';


document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        color = 'chartreuse';
        alert.style.color = 'chartreuse';
        alert.innerHTML = 'Has seleccionado este color. Has click en uno de los cuadros para ver el color';
    } else if (event.key === 's' || event.key === 'S') {
        color = 'blueviolet';
        alert.style.color = 'blueviolet';
        alert.innerHTML = 'Has seleccionado este color. Has click en uno de los cuadros para ver el color';
    } else if (event.key === 'd' || event.key === 'D') {
        color = 'lightseagreen';
        alert.style.color = 'lightseagreen';
        alert.innerHTML = 'Has seleccionado este color. Has click en uno de los cuadros para ver el color';
    } else {
        color = 'grey'
        alert.style.color = 'grey';
        alert.innerHTML = 'Presiona una de las letras indicadas, para elegir un color'
    }
})

box1.addEventListener('click', function colorBox1() { box1.style.backgroundColor = color });
box2.addEventListener('click', function colorBox2() { box2.style.backgroundColor = color });
box3.addEventListener('click', function colorBox3() { box3.style.backgroundColor = color });
box4.addEventListener('click', function colorBox4() { box4.style.backgroundColor = color });