//EXERCICIOS INTERPRETAÇÃO DE CÓDIGO-----------------

// EXERCICIO 1 
// a) O que vai ser impresso no console? 10 / 50

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? Não imprime nada

//EXERCICIO 2
// a. Explique o que essa função faz e qual é sua utilidade:

// Ela põe toda string em letras minusculas e retona true se contem a palavra "cenoura" ou false se não

// b.
 //    i.  Eu gosto de cenoura /true
//    ii.  CENOURA é bom pra vista /true
//   iii. Cenouras crescem na terra /true

//EXERCICIOS DE ESCRITA DE CÓDIGO-------------------
//1.
//a) 
function imprimeDados1(){

    const nome = `Caroline`
    const idade = `28`
    const cidade = `Gravataí`
    const profissao = `estudante`
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);
}
imprimeDados1()

//b)
function imprimedados2 (nome, idade, endereco, profissao){

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`);
}
imprimedados2(`Camila`, 28, `Gravataí 408`, `estudante`)

//2.
//a)
function soma(numero1, numero2){
     const resultado = numero1 + numero2
     console.log(resultado);
}
soma(20, 20)


//b)
function verdadeiroOuFalso(numero1, numero2){
    const resultado = numero1 >= numero2
    console.log(resultado)
}
verdadeiroOuFalso(3, 10)

//c)
function parOuImpar (numero){
    const resultado = numero / 2
    const comparador = resultado % 2 === 0
    console.log(comparador);
}
parOuImpar(4)

//d)


//3.
function soma(numero1, numero2){
    const numero1 = prompt(`Digite um numero`)
    const numero2 = prompt(`Digite outro numero`)
    const resultado = numero1 + numero2
    
}
  soma()
 













    