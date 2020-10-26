let custo = 100;
let lucro = 200;
let venda;
let custoTotal = custo + ((custo/100)*20);

if( custo <= 0 || lucro <= 0){
    console.log("Valor informado menor ou igual a 0.");
}else{
    venda = (lucro - custoTotal);
    venda = venda * 1000;
    console.log(" O lucro total é "+ venda +"!");
}





