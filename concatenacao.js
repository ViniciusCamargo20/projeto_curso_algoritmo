/*
nome: caractere
numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digire o nome:")
leia(nome)
escreval("Digire o número:")
leia(numero)

escreval(nome, " : ", numero, 15)
*/

var nome, numero

nome = prompt("Digite o seu nome: ")
numero = prompt("Digite o seu número: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero