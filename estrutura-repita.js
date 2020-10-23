/*
    sairLoop: caractere
    valor01, valor02: real

Início
// Seção de comandos, procedimento, funções, operadores, etc...
    repita
        escreva("Digite o primeiro valor: ")
        leia(valor01)
        escreva("Digite o segundo valor: ")
        leia(valor02)
        escreva("Resultado: " , valor01 + valor02)
        escreva("Deseja sair? S/N")
        leia(sairLoop)
    até sairLoop <> "N"
*/

function acaoBotao(){
    var sairLoop, valor01, valor02
    do{
        valor01 = prompt("Digite o primeiro valor: ")
        valor02 = prompt("Digite o segundo valor: ")
        document.getElementById("Paragrafo").innerText = "Resultado: " + (parseInt( valor01 ) + parseInt( valor02 ) )
        sairLoop = prompt("Deseja sair? S/N")
    }while(sairLoop == "N");
}

