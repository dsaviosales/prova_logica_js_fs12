/**
 * 
 */

function calcularIMC(altPar, pesoPar) {
    //let altura = document.getElementById("altura").value;
    let altura = altPar;
    //let peso = document.getElementById("peso").value;
    let peso = pesoPar;

    let imc = peso / (altura * altura);
    let resultado = (`${imc}`);

    if (imc < 18.5) {
        console.log( `Seu IMC é ${imc}. Você esta Abaixo do peso`);
    } else if (imc >= 18.5 && imc < 25) {
        console.log( `Seu IMC é ${imc}. Você esta "Peso normal`);
    } else if (imc >= 25 && imc < 30) {
        console.log( `Seu IMC é ${imc}. Sobrepeso`);
    } else if (imc >= 30 && imc < 35) {
        console.log( `Seu IMC é ${imc}. Obesidade grau I`);
    } else if (imc >= 35 && imc < 40) {
        console.log( `Seu IMC é ${imc}. Obesidade grau II`);
    } else if (imc > 40) {
        console.log( `Seu IMC é ${imc}. Obesidade grau III`);
    }
}
    //document.getElementById("resultado").innerHTML = result;
calcularIMC(1.80, 80);

