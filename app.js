//let titulo = document.querySelector("h1")
//titulo.innerHTML = "Jogo do número secreto"

//let paragrafo = document.querySelector("p")
//paragrafo.innerHTML = "Escolha um número entre 1 e 10"  

// os comandos escritos acima não estão errados. Entretanto, criando uma função que exiba o texto na tela e tenha como
// parâmetros as tags e os seus respectivos textos, o código deixa de ser repetido e fica de uma maneira mais fácil de 
// se entender. Não repetir diversas vezes o mesmo código e buscar deixar o programa mais dinâmico é uma boa prática da 
// programação.

let listaNumerosSorteados = [];
let multiplicador = parseInt(Math.random() * 100);
let numeroSecreto = gerarNumeroAleatorio();
let camuflador = parseInt(Math.random() * 100);
let numeroExibido = camuflador + numeroSecreto
let tentativas = 1;
let palavraTentativa = tentativas > 1? "tentativa" : "tentativas"


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', "Escolha um número entre 1 e "+numeroExibido+".");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == ""){
        exibirTextoNaTela("p", "Por favor, digite um número.")
    }
    else{
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!")
        let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("h1", "Errou!");
            exibirTextoNaTela("p", `O número secreto é menor que ${chute}`)
            tentativas += 1;
        }
        else{
            exibirTextoNaTela("h1", "Errou!");
            exibirTextoNaTela("p", `O número secreto é maior que ${chute}`)
            tentativas += 1;
        }
        limpaCampo()
    }
}
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * multiplicador + 1);
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limpaCampo(){
    chute = document.querySelector("input");
    chute.value = ""
}

function reiniciarJogo(){
     multiplicador = parseInt(Math.random() * 100);
    numeroSecreto = gerarNumeroAleatorio();
    camuflador = parseInt(Math.random() * 100);
    numeroExibido = camuflador + numeroSecreto
    limpaCampo();
    let tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)
}
