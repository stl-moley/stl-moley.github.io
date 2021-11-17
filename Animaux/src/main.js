console.log('cpo');

console.log('coucou');


const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
toggle.addEventListener('click', function() {
    body.classList.toggle('open');
});



var slide = new Array("/src/img/anes-duo.jpg", "/src/img/mouton-white.jpg", "/src/img/moutons-groupe.jpg", 
"/src/img/pexels-brett-sayles-4857501.jpg", "/src/img/pexels-pixabay-66258-smaller.jpg", "/src/img/pinguin-groupe-sea.jpg", 
"/src/img/woman-dog-black-white.jpg", "/src/img/woman-dog-orange.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}


