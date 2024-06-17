const frases = [
    "Daniel is the best professor não é segredo!",
    "Joaquim was here",
    "Digita mais rápido! Adianta vai!",
    "PARABENS VOCE TERMINOU!"
];

let indiceFrase = 0;
let fraseAtual = frases[indiceFrase];
let elementoFrases = document.getElementById('frases');
let textoInicial = document.getElementById("textoInicial")
let input = document.getElementById('input');
let section = document.getElementById('texto');
let boolean = false;

section.addEventListener('click', comecarJogo);
input.addEventListener('keyup', verificarInput);

const aparecerUmaVez = () => {

    textoInicial.classList.toggle("invisivel");
    input.classList.toggle('invisivel');
    section.removeEventListener('click', aparecerUmaVez);
};

section.addEventListener('click', aparecerUmaVez);

function comecarJogo() {
    if(!boolean){
    indiceFrase = 0;
    carregarProximaFrase();
    input.value = '';
    input.focus();
    boolean = true;
    }
}

function carregarProximaFrase() {
    fraseAtual = frases[indiceFrase];
    elementoFrases.innerHTML = fraseAtual;
}

function terminarJogo() {
    input.classList.toggle('invisivel');
}

function verificarInput() {
    const textoDigitado = input.value;
    let fraseCorreta = true;
    let htmlDaFrase = '';
    for (let i = 0; i < fraseAtual.length; i++) {
        if (i < textoDigitado.length) {
            if (textoDigitado[i] === fraseAtual[i]) {
                htmlDaFrase += `<span style="color: rgb(0, 255, 0);">${fraseAtual[i]}</span>`;
            } else {
                htmlDaFrase += `<span style="color: rgb(255, 0, 0);">${fraseAtual[i]}</span>`;
                fraseCorreta = false;
            }
        } else {
            htmlDaFrase += fraseAtual[i];
        }
    }

    elementoFrases.innerHTML = htmlDaFrase;

    if (!fraseCorreta) {
        input.value = textoDigitado.slice(0, -1);
    }

    if (textoDigitado === fraseAtual) {
        indiceFrase++;
        if (indiceFrase < frases.length-1) {
            carregarProximaFrase();
            input.value = '';
        } else {
            carregarProximaFrase();
            terminarJogo();
        }
    }
}