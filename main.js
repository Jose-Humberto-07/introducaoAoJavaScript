//manipulando string
/*
var nome = "Humberto";
var idade = 25;
var idade2 = 10;
var n1 = 10;
var n2 = 15;
var frase = "Japão é o melhor time da história do futebol."
//alert("O " + nome + " tem " + idade + " anos de idade.");
//alert(idade + idade2);

console.log(idade + idade2);
console.log(nome);
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
//console.log(frase.replace("Japão", "Brasil"));
console.log("");
console.log(n1 + n2);
var mult = n1 * n2;
console.log("Multiplicação: " + mult);
console.log(n1 + idade);
*/ 


//vetores===========================================

/**
 * 
 * var lista = ["maça", "pêra", "laranja", "uva", "salada-mista"];
console.log(lista);
lista.push("limão", "goiaba")
lista.pop("goiaba");
console.log(lista);
console.log(lista.reverse());
console.log("A lista tem " + lista.length + " elementos.");
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" | "));
 */


//dicionário==================================

//var fruta = {nome: "maça", cor: "vermelha"};
//console.log(fruta.nome);
//alert(fruta.cor);

//lista de dicionário=========================

/** 
 * var frutas = [{nome: "maça", cor: "vermelha"},{nome: "uva", cor: "roxa"}, {nome: "limão", cor: "verde"}];
console.log(frutas);
console.log("");
console.log(frutas[1].cor);
*/


//estrutura condicionais=======================

/**
 *var idade = prompt("Informe sua idade: "); 

if (idade <= 18) {
    alert("Menor de idade");
}else if (idade >= 18 && idade <= 60){
    alert("jovem.")
}
 
 */


//estrutura de repetição=======================

/**
 *var i = 0;


while (i < 11) {
    console.log("while " + i);
    i++;
}
 

console.log("");

var i2 = 0;
do {
    
    console.log("do while " + i2);
    i2++;
}while(i2 < 11);

console.log("");

var i3;

for (i3 = 0; i3 < 11; i3++) {
    console.log("for " + i3);
}


var validaInfo = false;
do {
    var idade = prompt("Informe sua idade: ")
    if (idade < 100){
        validaInfo = true;
    }else {
        alert("idade inválida, digite uma idade menor que 100, tente novamnete.")
    }
}while(validaInfo == false);
 */


//Date (data)==================================

/**
 *var d = new Date();
console.log(d);
console.log(d.getMinutes());
console.log(d.getHours());
 
 */


//função======================================

/**
 *function soma(n1, n2){
    return n1 + n2; 
}

alert(soma(5, 10));
console.log(soma(100, 1500));
 

function setRaplace(frase, name, new_name){
    return frase.raplace(name, new_name)
}
alert(setRaplace("vai japão", "japão", "Brasil"));
  var validaIdade = false;
function validaIdade(idade){
    var valida = true;
    if (idade >= 18) {
        valida = true;
    }else {
        valida = false; 
    }
    return valida;
}

var idade = prompt("Informe sua Idade: ")

alert(validaIdade(idade));
 */



//manipulando elementos com funções=====================================
//============================================================
/**
 *
  function button(){
    document.getElementById("agrade").innerHTML = "Obrigado por clicar, volte sempre.";

    //console.log(document.getElementById("agrade"))
    //alert("Obrigado por clicar, volte sempre.")
}

function direciona(){
    window.open("https://www.google.com");
    //window.location.href = "https://www.google.com"
}

function mouse(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse, volte sempre";
    //document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse, volte sempre";
    //alert("Trocar texto.")
}

function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("Página carregada, pode prosseguir.");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
 */




let totalPares = 0;
let totalImpares = 0;
let totalPositivo = 0;
let totalNegativo = 0;
 numero = [-5, 0, -3, -4, 12];
for (i = 0;i < numero.length; i++) {
    
    if (numero[i] % 2 == 0) {
      totalPares++;
    } 
    
    if (numero[i] % 2 != 0) {
      totalImpares++;
    }
    
    if (numero[i] > 0) {
      totalPositivo++;
    }
    
    if (numero[i] < 0) {
      totalImpares++;
    }
}
console.log(totalPares + " valor(es) par(es)")
console.log(totalImpares + " valor(es) Ímpar(es)")
console.log(totalPositivo + " valor(es) positivo(s)")
console.log(totalNegativo + " valor(es) negativo(s)")

