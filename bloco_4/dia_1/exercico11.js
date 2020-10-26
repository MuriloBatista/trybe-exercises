let salarioBruto = 3000;
let salarioBase;
let salarioLiquido;
let alicotaInss;
let alicotaIr;

if (salarioBruto <= 1556.94){
    salarioBase = (salarioBruto -(salarioBruto/100)*8);
}else if (salarioBruto == 1556.95 || salarioBruto <= 2594.92){
    salarioBase = (salarioBruto -(salarioBruto/100)*9);
}else if (salarioBruto == 2594.93 || salarioBruto <= 5186.82){
    salarioBase = (salarioBruto -(salarioBruto/100)*11);
}else if(salarioBruto > 5189.82){
    salarioBase = salarioBruto - 570.88;
}else{
    console.log ("Entre com um valor valido");
}

if (salarioBase <= 1903.98){
    salarioLiquido = salarioBase;
}else if (salarioBase == 1903.99 || salarioBase <= 2826.65){
    salarioLiquido = salarioBase - ((salarioBase/100)*7.5 - 142.80);
}else if (salarioBase == 2826.66 || salarioBase <= 3751.05){
    salarioLiquido = salarioBase - ((salarioBase/100)*15 - 354.80);
}else if (salarioBase == 3751.06 || salarioBase <= 4664.68){
    salarioLiquido = salarioBase - ((salarioBase/100)*22.5 - 636.13);
}else if (salarioBase > 4664.68){
    salarioLiquido = salarioBase - ((salarioBase/100)*27.5 - 869.36);
}else{
    console.log("Error");
}
console.log("O salario Liquido a receber é de: R$"+salarioLiquido);