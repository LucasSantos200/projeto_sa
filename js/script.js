let listaPalavras = [
    "usassemos", "Point", "Corinthians", "Epic Games", "Aternos", 
    "Among", "Listening", "Altura", "Ouvido", "Lado"
]

let secretWord = "";
let attemptsLeft = 6;
let guessedLetters = [];
let correctLetters = [];
let displayWord = [];
let pontuacao = 0

const displayPalavra = document.getElementById("palavraOculta");
const displayTentativas = document.getElementById("tentativas");
const displayPontuacao = document.getElementById("pontuacao");
const btnReiniciar = document.getElementById("botao-reinicio");
const btnChutar = document.getElementById("botao");
const inputLetra = document.getElementById("userInput");

function iniciarJogo(){
    const posicaoSorteadaDaListaDePalavras = Math.floor(Math.random() * listaPalavras.length);
    secretWord = listaPalavras[posicaoSorteadaDaListaDePalavras].toUpperCase();
        displayWord = Array(secretWord.length).fill("_");
        attemptsLeft = 6;
        guessedLetters = [];
        correctLetters = [];
        renderWord();
}

function renderWord(){
    displayPalavra.innerHTML = "";
    displayWord.forEach(letra => {
        const span = document.createElement("span");
        span.innerText = letra; 
        displayPalavra.appendChild(span);

    });    

    displayTentativas.innerText = attemptsLeft;
    displayPontuacao.innerText = pontuacao;

}

const somAcerto = new Audio('sons/respostaCerta.mp3');
const somErro= new Audio('sons/Errou.mp3');

function tocarSomErro() {
    somErro.currentTime = 0; 
    somErro.play();
}

function tocarSomAcerto() {
    somAcerto.currentTime = 0; 
    somAcerto.play();
}

function chutar(){
    const chute = inputLetra.value.toUpperCase();
    inputLetra.value = "";
    inputLetra.focus();
    if(!chute|| guessedLetters.includes(chute)){
        alert("essa letra aí ou ta repetida ou não existe");
        return;
    }
    guessedLetters.push(chute);
    if(secretWord.includes(chute)){
        tocarSomAcerto();

        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === chute){
                displayWord[i] = chute;
            }
        }
    }else {
        somErro.currentTime = 0;
        somErro.play();

        attemptsLeft--;

        document.getElementById("letrasGastas").innerText +=  ` ${chute},  `;
    }
renderWord();
checarGameOver();

function checarGameOver(){
    if(attemptsLeft <= 0){
        alert("Acabou o jogo, a palavra era: " + secretWord);
        iniciarJogo();
    } else if (!displayWord.includes("_")){
        alert("Pabens");
        pontuacao += 10;
        iniciarJogo();
    }
}
}

inputLetra.addEventListener("keypress", (e) => {
    if (e.key === "Enter"){ 
        chutar();
    }
});
btnChutar.addEventListener("click",chutar);
btnReiniciar.addEventListener("click", iniciarJogo);



iniciarJogo();
