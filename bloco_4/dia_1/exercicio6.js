let xadrez = "Bispo";
let converter = xadrez.toLocaleLowerCase();

if(converter == "bispo"){
    console.log("Move-se em diagonal");
}else if(converter == "peao"){
    console.log("Move-se para frente");
}else if(converter == "cavalo"){
    console.log("Move-se em 'L'");
}else if(converter == "torre"){
    console.log("Moves-se para vertical e horizontal");
}else if(converter == "rei"){
    console.log("Move-se para todas as direções apenas uma casa por vez");
}else if(converter == "rainha"){
    console.log("Move-se para todas as direções enquanto houver casa livre");
}else{
    console.log("Isso não é uma peça de Xadrez")
}
    
   
     
     
     


