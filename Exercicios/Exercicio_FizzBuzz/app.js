// Function arrow que retorna o valor maior de 2 parametros, junto com uma condição ternaria
// const max2 = (x,y) => x > y ? x : y;
// console.log(max2(10, 20));

// const ePaisagem = (l, a) => l > a; // Function arrow com condição ternaria e sem a necessidade de colocar um return
// console.log(ePaisagem(1920, 1080));

// function fizzBuzz(contagem, num) { // Função fizzbuzz que eu fiz
//     const numero = num;
//     let contagemNum = contagem;
//     console.log(Number.isInteger(num));
//     while (contagemNum <= numero) {
//         if (contagemNum % 3 === 0) {
//            console.log('fizz', contagemNum);
//         }
//         if (contagemNum % 5 === 0) {
//             console.log('buzz', contagemNum);
//         }
//         if (contagemNum % 3 === 0 && contagemNum % 5 === 0) {
//             console.log('fizzbuzz', contagemNum);
//         }
//         contagemNum++;
//     }
// }
// console.log(fizzBuzz(0, 100));

function fizzbuzz(num) {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num
}
console.log(fizzbuzz('a', fizzbuzz('a')));
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzbuzz(i));
}