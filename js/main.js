function clique(){
    document.getElementById("agradecimento").innerHTML = "<b>VocÊ Foi hACkeAdO</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Travazap ativado com sucesso!!!");
}

function redirect(){
    window.open("https://memegenerator.net/instance/71583293/compiuter-eita-hein-s-nos-compiuter");
    //window.location.href = "https://memegenerator.net/instance/71583293/compiuter-eita-hein-s-nos-compiuter" //abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("mouse").innerHTML = "VACILÃO!!!";
    elemento.innerHTML = "VACILÃO!!!";
    //alert("Falei pra não passar o mouse, agora tem que fechar a aba vacilão.");
}

function voltar(elemento){
    //document.getElementById("mouse").innerHTML = "Se passar o mouse aqui de novo é vacilão";
    elemento.innerHTML = "Se passar o mouse aqui de novo é vacilão";
}

function load(){
    alert("Siga os passos para não ser vacilão.")
}

function change(elemento){
    console.log(elemento.value);
}

/* function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));

//var maiorIdade;
function validaIdade(idade){
    //poderia utilizar a variável global, sem precisar declarar uma variável local
    var maiorIdade = true;
    if(idade >= 18){
        maiorIdade = true;
    }else{
        maiorIdade = false;
    }

    return maiorIdade;
}

var idade = prompt("Digite sua idade: ");
//validaIdade(idade);
//console.log(maiorIdade);
console.log(validaIdade(idade));
 */

/* var d = new Date();
alert(d.getHours() + ":" + d.getMinutes());
 */

/* var count;

for(count = 0; count <= 5; count ++){
    console.log(count);
}
*/

/* var count = 0;

while(count <= 5){
    console.log(count);
    if(count % 2 == 0){
        alert("par");
    }else{
        alert("ímpar");
    }
    count ++;
}
 */

/* var idade = prompt("Qual sua idade? ");

if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/* var frutas = [{nome:"maca", cor:"verde"}, {nome:"banana", cor:"amarelo"}];
console.log(frutas);
alert(frutas[0].cor);
 */

/* var fruta = {nome:"maca", cor:"verde"}
console.log(fruta);
alert(fruta.cor);
*/

/* var cesta = ["maca", "pera", "uva", "banana"];

console.log(cesta[3]);
cesta.pop(); //retira o ultimo elemento (banana)
cesta.push("laranja");
alert(cesta[3]); //o programa continua a ser executado apenas após interação com o pop-up
console.log(cesta.length);
console.log(cesta.reverse()); //imprime elementos ao contrário
console.log(cesta.toString()); //converte todo o array para uma string
console.log(cesta.toString()[7]); //lista o caracter da posição
console.log(cesta.join(' | ')); //também converte array para string, mas substitui a vírgula padrão pelo caracter digitado
 */

/* var nome = "Gustavo Mamede";
var n1 = 20;
var n2 = 10;
var frase = "Japão é o Melhor Time do Mundo"

alert(nome + " tem " + idade + " anos");
alert(n1 + n2); //para concatenar é necessário que seja string

console.log(nome);
console.log(n1 - n2); //pode-se utilizar qualquer operação
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase("Japão", "Brasil"));
console.log(frase.toLowerCase("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
*/