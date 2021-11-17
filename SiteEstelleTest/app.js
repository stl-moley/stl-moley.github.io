let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function(){
    body.classList.toggle('open');
})

// SLIDER

let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nb__img = img__slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImage(){
    for(let i=0; i<nb__img; i++){
        img__slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function(){
    etape++;
    if(etape>=nb__img) {
        etape = 0; }
    enleverActiveImage();
    img__slider[etape].classList.add('active');
})

precedent.addEventListener('click', function(){
    etape--;
    if(etape<0){
        etape = nb__img-1;
    }
    enleverActiveImage();
    img__slider[etape].classList.add('active');
})

/*setInterval(function(){
    etape++;
    if(etape>=nb__img) {
        etape = 0; }
    enleverActiveImage();
    img__slider[etape].classList.add('active');
},3000) */


// SLIDER DEUX

let img__slider_deux = document.getElementsByClassName('img__slider_deux');

let etape_deux = 0;

let nb__img_deux = img__slider_deux.length;

let precedent_deux = document.querySelector('.precedent_deux');
let suivant_deux = document.querySelector('.suivant_deux');

function enleverActiveImageDeux(){
    for(let i=0; i<nb__img_deux; i++){
        img__slider_deux[i].classList.remove('active_deux');
    }
}

suivant_deux.addEventListener('click', function(){
    etape_deux++;
    if(etape_deux>=nb__img_deux) {
        etape_deux = 0; }
    enleverActiveImageDeux();
    img__slider_deux[etape_deux].classList.add('active_deux');
})

precedent_deux.addEventListener('click', function(){
    etape_deux--;
    if(etape_deux<0){
        etape_deux = nb__img_deux-1;
    }
    enleverActiveImageDeux();
    img__slider_deux[etape_deux].classList.add('active_deux');
})