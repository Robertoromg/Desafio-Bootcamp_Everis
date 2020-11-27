//SOMA SIMPLES
var A = parseInt(gets());
var B = parseInt(gets());
let soma = (A + B);
console.log("SOMA = " + soma);

//COXINHA DO BUENO
let line = gets().split(" ");

let H = parseInt(line[0]);
let P = parseInt(line[1]);

let media = (H/P).toFixed(2);

console.log(" " + media);

//CÁLCULO DE VIAGEM
let line = gets().split(" ");
const mediaInicial = 12;
let H = parseInt(line[0]);
let P = parseInt(line[1]);

let media = (H*P)/mediaInicial;

let mediaFinal = media.toFixed(3);

console.log(" " + mediaFinal);

//IMPOSTO DE RENDA
let salario = gets(); 

let taxacao = parseFloat((((salario -2000)/100)) *8);
let taxacao1 = parseFloat(((salario - 3000)/100)*18)+((1000/100)*8); 
let taxacao2 = parseFloat(((salario - 4500)/100)*28)+((1500/100)*18)+((1000/100)*8);

if (salario <= 2000){
  console.log("Isento");
}
else if ((salario>=2000)&& (salario <= 3000)){
  console.log('R$ ' + taxacao.toFixed(2));
}
else if ( (salario>=3000)&& (salario<=4500)){
  console.log('R$ ' + taxacao1.toFixed(2));
}
else {
  console.log('R$ ' + taxacao2.toFixed(2));
}

//TEOREMA DA DIVISÃO EUCLIDIANA
let line = gets().split(' ');

let a = parseInt(line[0]);
let b = parseInt(line[1]);
let q = parseInt(a/b);
let r = a - b*q;

if(r < 0){
    r += Math.abs(b);
    q = (a-r)/b;
}

console.log(parseInt(q) + " " + parseInt(r));
