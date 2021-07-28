
// var nome = "Guilherme Okushi";
// var idade = 22;
// var idade2 = 10;
// var frase =  "oi";
// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2);
// console.log("nome: " + nome);
// console.log("idade: " + idade);
// console.log(frase.replace("oi","EAE"));
// console.log(nome.replace("Guilherme","George"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());
// console.log(idade * idade2);

// Listas
// var lista = ["maça","pera","laranja"];
// console.log(lista);
// console.log(lista[1]);
// alert(lista[1]);
// lista.push("uva");
// console.log(lista);
// lista.pop();
// console.log(lista);
// console.log(lista.reverse);
// console.log(lista.toString());
// console.log(lista.join("-"));

//Dicionarios
// var fruta = {nome:"maça",cor:"vermelha"};
// console.log(fruta);
// console.log(fruta.cor);
// console.log(fruta.nome);
// var fruta2 = [{nome:"maça",cor:"vermelha"},{nome:"uva",cor:"roxa"},{nome:"banana",cor:"amarela"}];
// console.log(fruta2[1].nome);

//Condicionais
// var idade = prompt("Qual sua idade?");
// if (idade >= 18) {
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// }

// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     alert(count);
//     count++;
// };

// var count;
// for(count=0;count<=5;count++){
//     alert(count);
// }

//Time
// var d = new Date();
// alert(d);
// alert(d.getMonth());
// console.log("Hoje é " + d.getDate);

//Funções
// function soma(n1,n2) {
//     return n1 + n2;
// }

// alert(soma(2,3));

// function setReplace(frase,nome,newName) {
//     return frase.replace(nome,newName);
    
// }
// alert(setReplace("Vai Japão","Japão","Brasil"));

// function validaIdade(idade) {
//     var valida;
//     if (idade >= 18) {
//         valida = true;
//     } else {
//         valida = false;
//     }
//     return valida;
// }
// var idade = prompt("Qual sua idade?");
// alert(validaIdade(idade))

function clicked() {
    document.getElementById("agradecimento").innerHTML = "<h2>Obrigado por clicar</h2>";
   // alert("clicked");

}
function redirecionar() {
    window.open("https://google.com");
    window.location.href = "https://maua.br";
}
function trocar(elemento) {
    //document.getElementById("movemouse").innerHTML = "<h1>ACHOU</h1>";
    elemento.innerHTML = "Achou";
}
function voltar(elemento) {
    //document.getElementById("movemouse").innerHTML = "Passa o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load() {
    alert("Pagina carregada");
}
function funcaoChange(elemento) {
    console.log(elemento.value);
}