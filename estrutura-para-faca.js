/*
// Seção de declarações das variáveis
   numero, fatorial, contador: inteiro

Início
// Seção de comandos, procedimento, funções, operadores, etc...
    escreval("Digite o número para calcular o fatorial.")
    leia(numero)
    fatorial := 1
    para contador de 1 ate numero faca
        fatorial := fatorial * contador
    fimpara
    escreva("O fatorial de ", numero, " é: ", fatorial)
*/

function acaoBotao() {
    var numero, fatorial
    numero = prompt("Digite o número para calcular o fatorial.")
    fatorial = 1
    for (contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
    }
    document.getElementById("Paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial  
}