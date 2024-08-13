let rlSync = require ('readline-sync');

let nome = rlSync.question("QUal é o seu nome ? \n");

let idade = rlSync.question("Qual é a sua idade ? \n");

console.log("Olá " + nome, "sua idade é " + idade )
