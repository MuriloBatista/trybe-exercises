let numbers = [5, 9, 3, 16, 0, 8, 100, 2, 35, 27];
let numeroImpar = [];

for (index = 0; index < numbers.length; index++){
    if(numbers[index] % 2 == 1){
        numeroImpar.push(numbers[index]);
    }        
}

if(numeroImpar == 0){
    console.log("Não existem numeros Impares no array.")
}else{
    console.log(numeroImpar);
}