// -----------------------------------------------------------------------------------------
// ------------------------------------ EXERCICIOS -----------------------------------------
// -----------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------

// 01. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (const number of numbers) {
    console.log(number);
}

// 02. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
console.log(soma);

// 03. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}

let media = soma / numbers.length;
console.log(media);

// 04. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    console.log('valor maior que 20');
}
else
    console.log('valor menor ou igual a 20');

// 05. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// versão didática

let maior = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}
console.log(maior);
// // versão simplificada
let maior = numbers.reduce(function (a, b) {
    return Math.max(a, b);

});
console.log(maior);

// 06. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
        impar += 1;
    }
}
console.log(impar);

// 07. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// versão didática

let menor = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}
console.log(menor);

// 08. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];

for (let i = 1; i <= 25; i += 1) {
    array.push(i);
}

console.log(array);

// 09. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .


let array = [];

for (let i = 1; i <= 25; i += 1) {
    array.push(i / 2);
}

console.log(array);

// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------- EXERCICIOS-BÔNUS -----------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------


// 01. Ordene o array numbers em ordem crescente e imprima seus valores;


let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (array[index] < array[secondIndex]) {
            let position = array[index];
            array[index] = array[secondIndex];
            array[secondIndex] = position;
        }
    }
}

console.log(array);

// 02. Ordene o array numbers em ordem decrescente e imprima seus valores;

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (array[index] > array[secondIndex]) {
            let position = array[index];
            array[index] = array[secondIndex];
            array[secondIndex] = position;
        }
    }
}

console.log(array);