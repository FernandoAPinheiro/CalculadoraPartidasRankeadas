function pontuacaoJogador(vitorias, derrotas){
    return vitorias - derrotas;
}

function nivelJogador(saldoVitorias){
    if(saldoVitorias < 10){
        return "ferro"
    }else if(saldoVitorias > 10 && saldoVitorias <= 20){
        return "Bronze"
    }else if(saldoVitorias > 20 && saldoVitorias <= 50){
        return "Prata"
    }else if(saldoVitorias > 50 && saldoVitorias <= 80){
        return "ouro"
    }else if(saldoVitorias > 80 && saldoVitorias <= 90){
        return "Diamante"
    }else if(saldoVitorias > 90 && saldoVitorias <= 100){
        return "Lendario"
    }else {
        return "Imortal"
    }

}

let vitorias =103;
let derrotas =2;
let saldoVitorias = pontuacaoJogador(vitorias,derrotas);
let nivel = nivelJogador(saldoVitorias);
console.log(`O heroi tem saldo de Vitorias de ${saldoVitorias} e está no nivel: ${nivel} `)


