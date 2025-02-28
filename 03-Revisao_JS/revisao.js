//comentário
/*
  este é um comentário em bloco
*/

//variáveis
// var -> não usa no dia a dia
let nome = 'Alison Naoki'; 
const idade = '19'

console.log('Meu nome é', nome, 'e tenho',idade, 'anos');

//não é possível reatribuir uma constante

//Operações
//vamos puxar as operações matemáticas com import:
import { soma, subtracao, multiplicacao, divisao, potencia } from './funcoes.js';

console.log(soma(1, 3));
console.log(subtracao(1, 3));

//condições
if (idade >= 18){
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}
//mensagem
const mensagem = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log('Mensagem =>', mensagem)

//listas

const frutas = ['maçã', 'banana', 'laranja'];
frutas.forEach((fruta)=>console.log(fruta));
console.log('Temos', frutas.length, 'frutas')

//adicionando novas frutas

frutas.push('melão');
frutas.forEach((fruta)=>console.log(fruta));
console.log('Agora, com o melão, temos', frutas.length, 'frutas')
