let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular(){
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let carne =  quantidadeDeCarne(duracao) * adultos + (quantidadeDeCarne(duracao) / 2 * criancas)
    let cerveja = quantidadeDeCerveja(duracao) * adultos 
    let agua = quantidadeDeAgua(duracao) * adultos + (quantidadeDeAgua(duracao)/2 * criancas)

    resultado.innerHTML += `<p>${(carne/1000).toFixed(1)} kg de carne</p>`
    resultado.innerHTML += `<p>${(Math.ceil(cerveja/355))} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(agua/2000)} garrafas de 2L de água ou refrigerante</p>` 
}

function quantidadeDeCarne(duracao){
    if (duracao >= 6){
        return 650
    } else {
        return 400
    }
}

function quantidadeDeCerveja(duracao){
    if (duracao >= 6){
        return 1200
    } else {
        return 2000
    }
}

function quantidadeDeAgua(duracao){
    if (duracao >= 6){
        return 1000
    } else {
        return 1500
    }
}

