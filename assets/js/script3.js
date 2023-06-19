/*Funcion Original

function pintar(){
ele = document.getElementById("ele1")
ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

/*3.1 */

let ele2 = document.getElementById("ele2")

ele2.addEventListener("click", function pintar (){ele2.style.backgroundColor = 'yellow'});

/*3.2 Verde por defecto, amarillo al hacer click modificando función anterior.*/

let ele3 = document.getElementById("ele3")

ele3.addEventListener("click", function pintar (color){ele3.style.backgroundColor = 'yellow'});

pintar ()

function pintar (color ='green'){ele3.style.backgroundColor = color }