var btnCriptografar = document.getElementById("#btn-criptografar");
var btnDescriptografar = document.getElementById("#btn-descriptografar");
var btnCopiar = document.getElementById("#btn-copiar");
var btnCopy = document.querySelector("#btn-copiar");
var textareaCriptografar = document.querySelector("#criptografia");

var valor;
var copiaCrip;
let phraseArray;
let memoria;

//Variaveis da criptografia
var vogalSubstituicao={
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
};

var codigoSubstituicao={
    ai:"a",
    enter:"e",
    imes:"i",
    ober:"o",
    ufat:"u"
};
 
//Focus no textarea criptografia ao abrir a página
window.onload = function () {
document.getElementById("criptografia").focus();
}

//Função que pega valor da text area
function resgataValor(){
    valor = document.getElementById("criptografia");
    valor = valor.value;
    // console.log(valor.value);
}

//Função copiar
function copiar(){
memoria = document.getElementById("descriptografia");
memoria.select();
memoria.setSelectionRange(0, 99999) //para compatibilidade em mobile
document.execCommand("copy");
console.log(memoria);

}

//Função criptografar
function criptografar() {
    resgataValor();
    //console.log(valor.value);

 alteracaoVogal = valor.replace(/a|e|i|o|u/g,function(item){
    let it = vogalSubstituicao[item];
    let itemvalor = it.replace(/(?:^|\s)\S/g,function(elemento){
    return elemento; });
    return itemvalor; 
    });
          console.log(alteracaoVogal);
    
    copiaCrip = document.getElementById("descriptografia");
    copiaCrip.value = alteracaoVogal;
}

//Função descriptografar
function descriptografar() {
    resgataValor();
 
alteracaoCodigo = valor.replace(/ai|enter|imes|ober|ufat/g,function(item){
    let it = codigoSubstituicao[item];
    let itemvalor = it.replace(/(?:^|\s)\S/g,function(elemento){
    return elemento; });
    return itemvalor; 
    });
    console.log(alteracaoCodigo);  
 
    copiaCrip = document.getElementById("descriptografia");
    copiaCrip.value = alteracaoCodigo;
}


