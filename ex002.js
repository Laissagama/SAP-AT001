var prompt = require("prompt-sync")()

var nota1 = Number(prompt('Digite sua primeira nota: '))
var nota2 = Number(prompt('Digite sua segunda nota: '))
var nota3 = Number(prompt('Digite sua terceira nota: '))
var nota4 = Number(prompt('Digite sua quarta nota: '))

var media = (nota1 + nota2 + nota3 + nota4) / 4

console.log('Sua média é: ' + media)

if (media >= 6) {
  console.log('Você está APROVADO!')
} else {
  console.log('Você está REPROVADO!')
}
