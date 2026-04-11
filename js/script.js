let listaPalavras = [
"StrayKat Muito Tufo ABCDEFGHIJKLMNOPQRSTUVWXYZ", "vascao porra"
]

let secretWord = "";
let attemptsLeft = 6;
let guessedLetters = [];
let correctLetters = [];
let displayWord = [];
let pontuacao = 0
let jogoFinalizado = false;


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
    displayWord = secretWord.split('').map(letra => letra === " " ? " " : "_");
    attemptsLeft = 6;
    guessedLetters = [];
    correctLetters = [];
    document.getElementById("letrasGastas").innerText = ""; 
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
const somVitoria= new Audio('sons/somVitoria.mp3');
const somDerrota= new Audio('sons/somDerrota.mp3');

function tocarSomErro() {
    somErro.currentTime = 0; 
    somErro.play();
}

function tocarSomAcerto() {
    somAcerto.currentTime = 0; 
    somAcerto.play();
}

function chutar(){  
    const apenasLetras = /^[A-Z]$/;

    if (jogoFinalizado) return;
    
    
    const chute = inputLetra.value.toUpperCase();
    
    inputLetra.value = "";
    inputLetra.focus();
    
    if(!chute || !apenasLetras.test(chute)){
        alert("Caractere invalido, não to querendo esse aí.");
        return;
    }
    if(guessedLetters.includes(chute)){
        alert("ce gosta dessa letra ein?")
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
        tocarSomErro();
        attemptsLeft--;
       
        const letrasErradas = guessedLetters.filter(letra => !secretWord.includes(letra));
        
        document.getElementById("letrasGastas").innerText =  letrasErradas.join(", ");
    }
renderWord();
checarGameOver();

function checarGameOver(){
  const tempoEspera = 1000;
  
    if(attemptsLeft <= 0){
        setTimeout(() => {
        somDerrota.play();
        alert("Acabou o jogo, a palavra era: " + secretWord);
        iniciarJogo();
        }, tempoEspera);
    } else if (!displayWord.includes("_")){
        setTimeout(() => {
        somVitoria.play();
        alert("Pabens");
        pontuacao += 10;
        iniciarJogo();
        }, tempoEspera); 
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
