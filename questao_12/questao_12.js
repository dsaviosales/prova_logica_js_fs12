/**
 * 12. Escreva um programa em JavaScript que encontra a média dos elementos de um array de 5 números.
 */

let numeros = [2,15,6,8,10];
let soma = 0 ;

for(var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    media = soma / numeros.length;
}
console.log(media);
