// alert('coucou');


var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
    } ) .mount();
}


/*new Splide( '#splide', {
	type   : 'loop',
	perPage: 3,
	perMove: 1,
} ).mount(); */