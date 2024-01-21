let numeroSecreto = Aleatorio();
let tentativas = 1;
let sorted = []


function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function interface(){
    exibirTexto('h1','Jogo do número secreto');
    exibirTexto('p','Escolha um número entre 1 e 10:');
}

interface();
    
function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavra = tentativas > 1 ? 'tentativas!' : 'tentativa!';
    let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavra}`;
    if (chute == numeroSecreto){
        exibirTexto('h1','Acertou!');
        exibirTexto('p', msgTentativas);  
        document.getElementById('reiniciar').removeAttribute('disabled');  
    } else if (chute < numeroSecreto){
            exibirTexto('p',`O número é maior que ${chute}`);
            limparCampo()
        } else if (chute > numeroSecreto) {
            exibirTexto('p',`O número é menor que ${chute}`);
            limparCampo()
        }
    }

  
function Aleatorio(){
    // aleatorio = parseInt(Math.random()*10+1);
    // if (sorted.includes(aleatorio)){
    //     return Aleatorio();
    // } else {
    //     sorted.push(aleatorio);
    //     return aleatorio
    return parseInt(Math.random()*10+1);
    // }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value='';
}

function reiniciarJogo(){
    numeroSecreto = Aleatorio();
    limparCampo();
    tentativas = 1;
    interface()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

tentativas++;  
