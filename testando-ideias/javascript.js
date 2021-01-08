/*/variaveis
var variavelAntiga = 20;//declaração de variável antiga
let idade=5;
console.log(idade + ' é o valor');
const valorNaoMuda = 20;//variavel para valores que não mudam

//---------------------------------------------------------------

//criando objetos
let dados = { 
    nome: 'Mayke',
    idade: 31,     
}
console.log(dados.idade);
console.log(dados.nome);

//---------------------------------------------------------------

//Arrays
let pessoa = [25,33,'mayke'];
console.log(pessoa[0]);

//---------------------------------------------------------------

//concatenação
let nome = 'mayke';
let habilidade = 'foda';
let eu = nome + ' é ' + habilidade;
console.log(eu);

//---------------------------------------------------------------

//funtions
let cor = 'white';
function mudaCor(mudei){
    cor = mudei;
};//função q nao retorna valor
console.log('cor antiga = ' + cor);
mudaCor("black");
console.log('cor nova = ' +cor);


let vezes = 5;
function multiplicar(valor){
    let resultado = valor * vezes;
    return resultado;
};//função q retorna valor
let numero = 20;
console.log(multiplicar(numero));


//---------------------------------------------------------------

//Operador ternário
let num = 9;
let saber = num >= 10 ? 'maior' : 'menor';
console.log(saber);

//---------------------------------------------------------------

let hora = 19;
let mensagem;
function verifica(){
        mensagem  = hora > 0 && hora < 18 ?  'bom dia' : 'boa noite';  
        return (console.log(mensagem))
}
verifica();

//---------------------------------------------------------------
let numeros = [52, 65, 43, 29, 31, 89, 16];
let qt = numeros.length;
let troca = '';
function organizador(){
    for(let i = 0; i <= qt; i++){
        for(let j = 0; j <= qt; j++){
            if(numeros[i] < numeros[j]){
                troca = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = troca;
            }
        }
    }   
}
for(mostra of numeros){
    console.log(mostra);}
    console.log('---------------------------------------')
organizador();
for(mostra of numeros){
    console.log(mostra);}

//---------------------------------------------------------------

let resultado = fizzBuzz(17);
console.log(resultado);
function fizzBuzz(entrada){
    if(entrada % 3 === 0 && entrada % 5 === 0){
        return 'FizzBuzz';
    }
    else if(entrada % 3 === 0){
        return 'Fizz';
    }
    else if(entrada % 5 === 0){
        return 'Buzz';
    }
    else if(entrada % 3 !== 0 && entrada % 5 !== 0 && typeof entrada === 'number'){
        return entrada;
    }
    else(typeof entrada !== 'number')
      return 'não é um numero'; 
    }

    //-----------------------------------------------------------
    let carteira = verificarVelocidade(135);
    console.log(carteira);
    function verificarVelocidade(velocidade){
        if(velocidade <= 70)
            return 'ok';       
        if(velocidade > 70 && velocidade < 135){
            velocidade = Math.floor((velocidade - 70) / 5);
            return 'pontos: ' + velocidade;
        }            
       else{
            return 'carteira suspensa';}
    }

    //===========================================================
    //construtores de objetos ______________________
    ///método 1 - função... |___FUNCTION FACTORY___|
    function cadastrar(nome, sexo, numero, estadoCivil, endereco){
        return {
            nome: nome,
            sexo: sexo,
            numero: numero,
            estadoCivil: estadoCivil,
            endereco: endereco,

        }
    }
    //EXEMPLO
    let cliente = cadastrar('mayke', 'masc', 48991945335, 'solteiro', 'rua kiliano hammes' )
    console.log(cliente);
    console.log(cliente.nome);

    //MÉTODO 2 - CONSTRUTORES

    function Cadastrar(nome, sexo, numero, estadoCivil, endereco){
        this.nome = nome,
        this.sexo = sexo,
        this.numero = numero,
        this.estadoCivil = estadoCivil,
        this.endereco = endereco
    }
    const cliente2 =new Cadastrar('eu', 'masc', 48991945335, 'solteiro', 'rua bela vista 25');
    console.log(cliente2);


    //=========================================================================

    /*function postagemui(titulo, mensagem, autor){
        return {
            titulo: titulo,
            mensagem: mensagem,
            autor: autor
        }
    }
    postagem1 = postagemui('agora vai', 'foi', 'eu mesmo');
    console.log(postagem1)

    function Postagem(titulo, mensagem, autor){
        this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor
    }
    let postagem2 = new Postagem('testando', 'testei', 'testao');
    console.log(postagem2);*/

    /*function mudar(testecor){       
            let cor = '';
            cor = document.querySelector('aside');
            cor.style.background = 'blue'; 
            function testecor

        }*/
        let cor = 'azul';
        let btn = '';
        let foi = true;

        function mudar(){  
            if(foi === true) {              
                cor = document.querySelector('aside');
                cor.style.background = 'blue';
                btn = document.querySelector('button');
                btn.style.background = 'green';
                foi = false;
            }else{
                cor = document.querySelector('aside');
                cor.style.background = 'green';
                btn = document.querySelector('button');
                btn.style.background = 'blue';
                foi = true;
            }


            return console.log(cor);
                      
        }
        
            

    

