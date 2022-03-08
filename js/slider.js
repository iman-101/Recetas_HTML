/*	Slider animado, por Robert Sallent para el curso de 
	aplicaciones web en CIFO Sabadell */

// CONFIGURACION
const numImagenes = 4; // número total de fotos a mostrar (configurable)
const tiempo = 2.5;    // tiempo en segundos para hacer avanzar las fotos
var fotos=['img/portada4.jpg', 'img/portada5.jpg', 'img/galeria8.jpg',
		   'img/galeria2.jpg', 'img/galeria3.jpg', 'img/galeria7.jpg',
		   'img/galeria1.jpg', 'img/galeria2.jpg', 'img/galeria6.jpg'];


// PROGRAMA
var inicial=0; // índice que marcará la primera foto a mostrar
var final = numImagenes+2; // índice de la última foto a mostrar (+2)

// al cargar la página
window.onload=function(){

	// crea tantas imágenes como se haya configurado
	// (+2 que sobresalen por los extremos pero no se ven)
	for(let j=inicial; j<final; j++){
		var imagen = document.createElement('img');
		imagen.src = fotos[j];

		// cálculos para el posicionamiento absoluto
		imagen.style.width = 100/numImagenes+'%';
		imagen.style.left = 100/(numImagenes)*(j-1)+'%';

		galeria.appendChild(imagen);
	}

	// calcula la altura de la galería de forma dinámica
	galeria.style.height = galeria.offsetWidth/(numImagenes*3/4)+'px';
}

// avanzar
function next(){
	clearInterval(intervalo); // detén el avance automático
	
	inicial=(inicial+1)%fotos.length; // actualiza índices
	final=(final+1)%fotos.length;
	
	// crea una nueva imagen y colócala al final (derecha)
	var imagen = document.createElement('img');
	imagen.src = fotos[final];
	imagen.style.width = 100/numImagenes+'%';       // cálculo del ancho
	imagen.style.left  = 100+(100/numImagenes)+'%'; // cálculo de su posición
	galeria.appendChild(imagen);
	
	// recupera las imágenes de la galería
	var imagenes = galeria.getElementsByTagName('img');

	for(let imagen of imagenes) // recalcula sus nuevas posiciones
		imagen.style.left = parseInt(imagen.style.left)-(100/numImagenes)+'%';

	// elimina la foto que se sale por el inicio (izquierda)
	imagenes[0].remove();

	intervalo = setInterval(next,tiempo*1000); // activa el avance automático
}


// retroceder
function back(){
	clearInterval(intervalo); // detén el avance automático

	inicial=((inicial-1)+fotos.length)%fotos.length;  // actualiza índices
	final=((final-1)+fotos.length)%fotos.length;

	// crea una nueva imagen y colócala al inicio (izquierda)
	var imagen = document.createElement('img');
	imagen.src = fotos[inicial];
	imagen.style.width = 100/numImagenes+'%';		// cálculo del ancho
	imagen.style.left  = -(100/numImagenes)*2+'%';	// cálculo de su posición
	galeria.insertBefore(imagen, galeria.firstElementChild);

	// recupera las imágenes de la galería
	var imagenes = galeria.getElementsByTagName('img');

	for(let imagen of imagenes) // recalcula sus nuevas posiciones
		imagen.style.left = parseInt(imagen.style.left)+(100/numImagenes)+'%';

	// elimina la foto que se sale por el final (derecha)
	imagenes[imagenes.length-1].remove();

	intervalo = setInterval(next,tiempo*1000); // activa el avance automático
}

// las fotos avanzan solas
var intervalo = setInterval(next, tiempo*1000);

// si varía el tamaño de la ventana, recalculamos el alto de la galería
window.onresize = function(){
	galeria.style.height = galeria.offsetWidth/(numImagenes*3/3)+'px';
}