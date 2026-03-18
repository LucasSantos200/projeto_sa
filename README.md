vai ter uma margem de erro em 6 letras erradas
o jogo vai mostrar a palavra oculta substituindo os "_" pela letra correta
se o jogador acertar uma letra, digita a letra no lugar do "_".
quando o jogador errar uma letra, registra em "letras erradas" e diminui as tentativas
quando todas as letras forem acertadas, o jogo acaba e mostra a palavra correta
se todas as tentativas acabarem, o jogo bloqueia e mostra a palavra correta

PSEUDOCODIGO:
iniciar jogo;
definir palavra secreta;
tentativas = 6;
enquanto tentativas > 0 e palavra não completa;
digitar letra;
ler letra;
caso a letra for a correta coloque em um dos espaços;
caso for a letra for a incorreta;
mostrar letra abaixo na margem;
se letra já foi usada;
mostrar aviso;


 damos as variaveis:
 userInput: armazena a letra digitada pelo jogador;
 palavraOculta: palavra que e invisivel que e substituida quando o jogador coloca a palavra correta;
 tentativas: tentativas que o jogador tera para acertar a palavra;
 pontuacao: pontuaçao do jodador quando ganhar a partida quanto menos erros melhor a pontuaçao;
 letrasGastas: letras que que foram usadas;

 passo a passo:

O jogador escolhe uma palavra
    O jogo começa
    O jogador escolhe uma letra para chutar
 SE a letra for correta, substitui um placeholder pela letra correta,
 SENAO, coloca a letra errada em letrasGastas e diminui uma das tentativas;
 CASO as tentativas forem zeradas, o jogo encerra e bloqueia a digitação até o jogo reiniciar.  
