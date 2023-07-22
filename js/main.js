
const textarea = document.querySelector("textarea");
const contendorMensaje = document.querySelector(".contenedor-mensaje")
const textareaSalida = document.querySelector(".texto-salida");
const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const botonCopiar = document.querySelector(".boton-copiar");

let texto;
let textoEncriptado;
let textoDesencriptado;


botonEncriptar.addEventListener('click', function () {
    validar();
    encriptar(texto);
    textareaSalida.value = textoEncriptado;
});

botonDesencriptar.addEventListener('click', function () {
    validar();
    desencriptar(texto);
    textareaSalida.value = textoDesencriptado;
});

botonCopiar.addEventListener('click', function () {

    navigator.clipboard.writeText(textareaSalida.value);
    botonCopiar.textContent = 'Copiado';

    setTimeout(function () {
        botonCopiar.textContent = 'Copiar';
    }, 2000)

});

function encriptar(texto) {

    const array = texto.split('');
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'a':
                array[i] = 'ai';
                break;
            case 'e':
                array[i] = 'enter';
                break;
            case 'i':
                array[i] = 'imes';
                break;
            case 'o':
                array[i] = 'ober';
                break;
            case 'u':
                array[i] = "ufat";
                break;
            default:
                break;
        }
    }
    textoEncriptado = array.join('');

    return textoEncriptado;
}

function desencriptar(texto) {
    textoDesencriptado = texto.replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    return textoDesencriptado;
}

function validar() {
    texto = textarea.value;
    texto = texto.toLowerCase();
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if (textarea.value === "") {
        contendorMensaje.style.display = "grid";
        textareaSalida.style.display = "none";
        botonCopiar.style.display = "none";
    } else {
        contendorMensaje.style.display = "none";
        textareaSalida.style.display = "block";
        botonCopiar.style.display = "block";
    }
}





