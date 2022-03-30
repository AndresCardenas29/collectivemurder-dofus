window.addEventListener('load', () => {
    const btnRegistrarGrupo = document.getElementById("registrarGrupo");
    const btnRegistroIndividual = document.getElementById("registroIndividual");

    scrollTo("#btn","#reglas");
    scrollTo("#btnReglas","#reglas");
    scrollTo("#btnPremios","#reglas");
    scrollTo("#btnInscribirse","#formulario");

    cerrarLoader();

    btnRegistrarGrupo.addEventListener('click', registrarGrupo);
    btnRegistroIndividual.addEventListener('click', registroIndividual);
    
    $(".alert").alert();
});

let tiempoAlerta;


function cerrarLoader() {
    setTimeout(() => {
        document.querySelector(".loader").classList.toggle("hiddeLoader");
    }, 500);
}
function scrollTo(selector,destino) {
    $(selector).click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(destino).offset().top
        }, 1000);
    });
}

function registrarGrupo() {
    const nombreGrupo = document.querySelector("input[name='nmTeam']").value;
    const nombrePj1 = document.querySelector('input[name="nmPj1"]').value;
    const apodo1 = document.querySelector('input[name="apodo1"]').value;
    const nivel1 = document.querySelector('input[name="nivel1"]').value;
    const nombrePj2 = document.querySelector('input[name="nmPj2"]').value;
    const apodo2 = document.querySelector('input[name="apodo2"]').value;
    const nivel2 = document.querySelector('input[name="nivel2"]').value;
    const nombrePj3 = document.querySelector('input[name="nmPj3"]').value;
    const apodo3 = document.querySelector('input[name="apodo3"]').value;
    const nivel3 = document.querySelector('input[name="nivel3"]').value;

    if (!nombreGrupo){
        alerta("Ingresa un nombre de grupo valido", 3000);
        return;
    }else if(!nombrePj1){
        alerta("Ingresa un nombre de personaje valido", 3000);
        return;
    }else if(!apodo1){
        alerta("Ingresa un apodo valido", 3000);
        return;
    }else if(!nivel1){
        alerta("Ingresa un nombre de grupo valido", 3000);
        return;
    }else if(nivel1 < 190){
        alerta(`El nivel de ${nombrePj1} debe ser 190 o mayor.`, 5000);
        return;
    }else if(!nombrePj2){
        alerta("Ingresa un nombre de grupo valido", 3000);
        return;
    }else if(!apodo2){
        alerta("Ingresa un nombre de grupo valido", 3000);
        return;
    }else if(!nivel2){
        alerta("Ingresa un nombre de grupo valido", 3000);
        return;
    }else if(nivel1 < 190){
        alerta(`El nivel de ${nombrePj2} debe ser 190 o mayor.`, 5000);
        return;
    }else if(!nombrePj3){
        alerta("Ingresa un nombre de grupo valido", 3000);
        return;
    }else if(!apodo3){
        alerta("Ingresa un nombre de grupo valido", 3000);
        return;
    }else if(!nivel3){
        alerta("Ingresa un nombre de grupo valido", 3000);
        return;
    }else if(nivel1 < 190){
        alerta(`El nivel de ${nombrePj3} debe ser 190 o mayor.`, 5000);
        return;
    }else if(nivel1 == 200 && nivel2 == 200 && nivel3 == 200){
        alerta(`Los 3 jugadores son nivel 200, al menos uno debe ser nivel 190 a 199.`, 5000);
        return;
    }else if(
        (nivel1 == 200 && nivel2 < 200 && nivel3 < 200) ||
        (nivel1 < 200 && nivel2 == 200 && nivel3 < 200) ||
        (nivel1 < 200 && nivel2 < 200 && nivel3 == 200)
    ) {
        alerta(`Debe haber 2 de nivel 200 y uno entre 190 a 199.`, 5000);
        return;
    }

    const datos = {
        nombreGrupo:nombreGrupo,
        jugador1:{
            nombrePj:nombrePj1,
            apodo:apodo1,
            nivel:nivel1
        },
        jugador2:{
            nombrePj:nombrePj2,
            apodo:apodo2,
            nivel:nivel2
        },
        jugador3:{
            nombrePj:nombrePj3,
            apodo:apodo3,
            nivel:nivel3
        }
    }

    console.log(datos);
}

function registroIndividual() {
    const nombrePj = document.querySelector("input[name='nmPj']").value;
    const apodo = document.querySelector("input[name='apodo']").value;
    const nivel = document.querySelector("input[name='nivel']").value;

    if(!nombrePj) {
        alerta(`EL campo está vacío, ingresa un nombre de personaje válido.`, 5000);
        return;
    }else if(!apodo) {
        alerta(`EL campo está vacío, ingresa un apodo válido.`, 5000);
        return;
    }else if(!nivel) {
        alerta(`EL campo está vacío, ingresa un nivel válido, recuerda, desde 190 en adelante.`, 5000);
        return;
    }else if(nivel < 190) {
        alerta(`Solo participan los niveles 190 en adelante.`, 5000);
        return;
    }

    const datos = {
        nombrePj:nombrePj,
        apodo:apodo,
        nivel:nivel
    }

    console.log(datos);
}

function alerta(mensaje, tiempo) {
    const alerta = document.querySelector(".alerta");
    const mensajeAlerta = document.querySelector(".alerta .mensaje");

    mensajeAlerta.innerHTML = mensaje;
    alerta.classList.toggle("verAlerta");

    tiempoAlerta = setTimeout(()=> {
        alerta.classList.toggle("verAlerta");
    },tiempo);
}