/*
    nome: caractere
    idade, limite, contador: inteiro

Início
// Seção de comandos, procedimento, funções, operadores, etc...
    escreval("Digite a quantidade de vezes que vai ser verificado a idade: ")
    leia(limite)
    contador = 0
    enquanto contador < 1 faca
        escreva("Digite o nome da pessoa: ")
        leia(nome)
        escreva("Digite a idade de: ", nome , ": ")
        leia(idade)
        se idade > 18 entao
            escreva(nome , "você é maior de idade!")
        senão
            escreva(nome , "você é menor de idade!")
        fimse
        contador = contador + 1
    fimenquanto
*/

function acaoBotao() {
    var nome, idade, limite, contador
    limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ")
    contador = 0
    while(contador < limite){
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade de: " + nome)
        if ( idade > 18 ) 
            document.getElementById("Paragrafo").innerText = nome + " você é maior de idade! "  
        else
            document.getElementById("Paragrafo").innerText = nome + " você é menor de idade! "  
        contador++    
    }
}
