

function isPalindrome(palavra){
    let palindromo = [];
    let resultado = "";

palindromo = [...palavra];
    for(index = palavra.length -1; index > -1; index--){
        resultado += palindromo[index];
    }
    if(palavra == resultado){

        return console.log("A palavra é um palindromo");
    }else{
        return console.log("A palavra informada não é um palindromo");
    }
}console.log(isPalindrome("carro"));