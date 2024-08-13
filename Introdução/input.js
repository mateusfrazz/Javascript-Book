// use o seguinte comando no terminal para instalar o readlyne-rlSync
// npm install readline-sync --save

// declarando uma variavel e usando o modulo readline-sync
let rlSync = require ('readline-sync')

// obtendo o input(dados) do usuario 
let nome = rlSync.question("Qual o seu nome? \n")

console.log("Olá " + nome)

//Para executar abra um terminal e coloque o segunte comando node input.js

