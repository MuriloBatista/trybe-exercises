let numbers = [5, 9, 3, 16, 0, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (index = 0; index < numbers.length; index++){
    if(numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }       
}
console.log(maiorNumero);