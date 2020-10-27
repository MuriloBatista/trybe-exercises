let numbers = [5, 9, 3, 16, 0, 8, 100, 2, 35, 27];
let result = 0;
let media = 0;

for(index = 0; index < numbers.length; index ++) {
    result = result + numbers[index];
}
media = result/numbers.length

if (media > 20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor menor ou igual a 20.");
}
console.log(media);