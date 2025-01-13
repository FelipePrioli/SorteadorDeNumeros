function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;
    
    for(let i = 0; i < quantidade; i++){
        numero = NumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){
            numero = NumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let numerosSorteados = document.getElementById('resultado');
    numerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao();
}

function NumeroAleatorio(max, min){
   return parseInt(Math.random() * (max - min + 1)) + min;
}


function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add("container__botao")

    }else{
        botao.remove(("container__botao"))
        botao.classList.add('container__botao-desabilitado')
    }
}

function reiniciar(){
    document.getElementById('ate').value = ''
    document.getElementById('de').value = ''
    document.getElementById('quantidade').value = ''
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>'
    alterarStatusBotao();
    
}