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
btnReiniciar.addEventListener("click", iniciarJogo);

iniciarJogo();
