/*
  nota01, nota02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  nota01 := 10
  nota02 := 15
  
  se(nota01 = nota02)entao   // pode ser tbm: se(nota01 <> nota02)entao
    escreval("Nota é diferente")
  senao
    escreva("Nota01 é igual")
  fimse
*/

var nota01, nota02

nota01 = 10
nota02 = 15
  
if(nota01 >= nota02)   // pode ser tbm: se(nota01 <> nota02)entao no visualg
    alert("Nota01 é maior ou igual")
else
    alert("Nota01 é menor")