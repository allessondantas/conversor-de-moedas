
// Como executar o Js? Ctrl+Alt+n. atalho para garregar o Js
// String - parte de texto do Js que podem ser atribuídas "", '' ou ``
// Variáveis - São memórias separadas no pc para uma execução
// Number - Forma de contas dentro do Js
// Boolean - Forma de leitura do Pc ( 010011101010101)
// Object - É usado para guardar ou separar informações usando o {}, ajudando tbm á economisar dados, no caso, não criando mais variáveis
// Null e Undefined - Null para ocutar algo e o Undefined indica erro no código
// Array - Estrutura de dados ou organizador de informações
// If e Else - Verdadeiro ou falso usando o > Maior/ < Menor e == igual à
// Function - Não menos importante, simplesmente usado quando precisa usando o nome da variável e (), exe: Adm()
// 
function master(){

const one = "texto com aspas duplas"
const two = 'texto com aspas simples'
const three = `texto com crase, minha idade é ${20+9}`
const numbert1 = 15*24

console.log(one)
console.log(two) 
console.log(three)
console.log(numbert1)

const idade = `Roland Rd 300 nx e um Roland xps-${10}`
const mystring = `Meu stup dos sonhos é um ${idade}`
console.log(mystring)

const mydata = { 
    Nome: "Allesson Dantas Assis da Silva",
    idade: 29,
    Endereço: {
    street: "Rua Monsenhor João Barbalho",
    Nº: null,
    País: "Brasil"}
}
// ajuste de nome, no caso principal - editar a variável -CONST-.
mydata.Nome =`Gleyssiane ${14+14}, Esposa, Antony ${1} e 4 meses, Filho`

const Allesson = [{
    Nome:"Allesson Dantas Assis da Silva",
    idade: 29 ,
    Altura: 1.74,},{
   
    Nome:"Gleyssiane Pereira Campos Dantas",
    idade: 28 ,
    Altura: 1.71,},{

    Nome:"Antony Campos Dantas de Assis",
    idade: 1,
    Altura: 0.78,}]

console.log(mydata.Nome)
console.log(mydata.Endereço.Nº)
console.log(Allesson[1])}

function nota(){

const notadoALUNO = 10
const notadeRECUPERAÇÃO = 7
const notadeCORTE = 5

if(notadoALUNO > notadeRECUPERAÇÃO){

    console.log("Parabéns, você foi aprovado")
}
if(notadoALUNO == notadeRECUPERAÇÃO){

    console.log("você está na recuperação")
}

if(notadoALUNO < notadeRECUPERAÇÃO){

    console.log("você está reprovado")}}

function master(){
    console.log("master")
}

const elements = document.getElementsByTagName("button")

console.log(elements)


const element = document.querySelector("#my-input")

const h1 = document.querySelector("h1")

const html = document.querySelector("html")

element.placeholder = "Eu vou conseguir"


console.log(element.placeholder)

const button = document.querySelector(".my-button")
const at = document.getElementsByClassName("parágrafo-js")

button.style.color = "white"
button.style.backgroundColor = "black"
at.style.color = "red"



function avançar() {

    element.placeholder = "Eu vou chegar lá"
    h1.style.color = "black"
    html.style.backgroundColor = "blue"
}

function voltar() {

    element.placeholder = "irei ser um programador"
    h1.style.color = "red"
    html.style.backgroundColor = "purple"
}

const text = document.querySelector("p.text")
console.log(text.innerHTML)