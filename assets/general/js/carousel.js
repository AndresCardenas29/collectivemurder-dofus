document.addEventListener('DOMContentLoaded', () => {
    let ancho = 1920;
    const carousel = document.querySelector('.carousel');
    const boton_izquierdo = document.querySelector('.btn-left');
    const boton_derecho = document.querySelector('.btn-rigth');

    boton_derecho.addEventListener('click', () => {
        carousel.scroll({
            left: ancho,
            behavior: 'smooth'
        });
        ancho = ancho + 1920;
        if(ancho == (1920 * 4)){
            ancho = 0;
        }
    });

    boton_izquierdo.addEventListener('click', () => {
        ancho = ancho - 1920;
        carousel.scroll({
            left: -ancho,
            behavior: 'smooth'
        });
        if (ancho < 0){
            ancho = 0;
        }
    });
    // console.log(carousel.scroll(20,0));
    
});