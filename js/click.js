
let contador=0;

var teste1 = document.getElementById('teste1')

var blocao = document.getElementById("click")
console.log(blocao)
const opcoes = document.querySelectorAll(".opcao");

//opções 
//-===========================================================================================-
var opcao1 = document.getElementById('opcao1')
var opcao2 = document.getElementById('opcao2')
var opcao3 = document.getElementById('opcao3')
var opcao4 = document.getElementById('opcao4')
//-===========================================================================================-

//conteúdo da matéria e das opções
var conteudos=[
    //doctype
"<!DOCTYPE html> \n ",
//html
"<!DOCTYPE html> \n<html lang='pt-br'> \n \n \n \n \n</html>",
//head
"<!DOCTYPE html> \n<html lang='pt-br'> \n  <head> \n    <meta charset='UTF-8'>\n    <meta name='viewport'content='width=device-width,\n    initial-scale=1.0'><title>Joguinho de clique</title>\n    <link rel='stylesheet' href='styles.css'>\n  </head>  \n \n \n \n</html>",
//javascript
"<!DOCTYPE html> \n<html lang='pt-br'> \n  <head> \n    <meta charset='UTF-8'>\n    <meta name='viewport'content='width=device-width,\n    initial-scale=1.0'>  \n    <title>Joguinho de clique</title>\n    <link rel='stylesheet' href='styles.css'>\n    <script src='script.js' defer></script> \n  </head> \n \n \n</html>",
//body
"<!DOCTYPE html> \n<html lang='pt-br'> \n  <head> \n     <meta charset='UTF-8'>\n     <meta name='viewport'content='width=device-width,\n     initial-scale=1.0'>   \n     <title>Joguinho de clique</title>\n     <link rel='stylesheet' href='styles.css'>\n     <script src='script.js' defer></script>\n  </head> \n \n  <body> \n \n \n  </body> \n \n</html>"
] 


var opcoesTexto=[
    ["<!DOCTYPE html>","<title>","<head>","<html>"],
    ["<html>","<p>","<a>","<body>"],
    ["<_HEAD_>","<H3ad","<head>","<>"],
    ["<script>","<body>","<CSS>","<Daniel>"],
    ["<body>","<h1>","<head>","<123>"]

]
//aleatorio
//let alea = Math.floor(Math.random() * 5);
let contadorOpIn =0;
let=finalizado=0;
console.log(contadorOpIn);
let errou=0;


    //USANDO um foreach para colocar o conteúdo dentro do botão
    function atualizarOpcoes() {
        //para cada botão e indice, colocar o conteúdo no respectivo botao
        opcoes.forEach((opcao, index) => {
            opcao.textContent = opcoesTexto[contadorOpIn][index];
        });
    }
let contadorBotao=0;
    function exibirBotaoReiniciar() {
        contadorBotao++
        if(contadorBotao==1){
        const botaoReiniciar = document.createElement("button");
        botaoReiniciar.textContent = "Reiniciar";
        botaoReiniciar.classList.add("reiniciar");
        blocao.appendChild(botaoReiniciar);
        botaoReiniciar.addEventListener("click", reiniciarJogo);
        }
    }

    function reiniciarJogo() {
        teste1.textContent = "";
        teste1.classList.remove('perdeu');
       
        contadorOpIn = 0;
        contadorBotao = 0;
        errou = 0;
        atualizarOpcoes();
        const botaoReiniciar = document.querySelector(".reiniciar");
        if (botaoReiniciar) {
            botaoReiniciar.remove();
        }
    }

    atualizarOpcoes()
    teste1.classList.toggle('cor')
    function verificar(opcao) {
    // Aqui você pode implementar a lógica para verificar se a opção está correta
    // Por exemplo, você pode comparar a opção selecionada com uma resposta correta
    // e então atualizar o conteúdo de acordo.
   
   console.log(opcao)
    var opcaoSelecionada = '';
        

    // Aqui você pode definir o conteúdo com base na opção selecionada
    if(contadorOpIn==0){
        if (opcao === 'opcao1') {
           
            if(errou==0){
                
                contador=1
                
                teste1.textContent += conteudos[contadorOpIn];
                contadorOpIn++
                atualizarOpcoes()
            }else{window.alert("Antes de continuar, recomece a lição")}
           
        } else if (opcao === 'opcao2') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=2
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
            }else{window.alert("Antes de continuar, recomece a lição")}
            
            
        } else if (opcao === 'opcao3') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=3
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
            }else{window.alert("Antes de continuar, recomece a lição")}
            
        } else if (opcao === 'opcao4') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=4
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
            }else{window.alert("Antes de continuar, recomece a lição")}
            
        }
        
        
    }else if(contadorOpIn==1){
        if (opcao === 'opcao1') {
            console.log(errou)
            if(errou==0){
                contador=1
                
                teste1.textContent = conteudos[contadorOpIn];
                contadorOpIn++
                atualizarOpcoes()
            }else{window.alert("Antes de continuar, recomece a lição")}
            
        } else if (opcao === 'opcao2') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=2
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
                teste1.classList.toggle('perdeu')
            }else{window.alert("Antes de continuar, recomece a lição")}

            
            

        } else if (opcao === 'opcao3') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=3
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
                teste1.classList.toggle('perdeu')
            }else{window.alert("Antes de continuar, recomece a lição")}
            
           
        
        } else if (opcao === 'opcao4') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=4
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
                teste1.classList.toggle('perdeu')
            }else{window.alert("Antes de continuar, recomece a lição")}
            
             
            
        } 
    }else if(contadorOpIn==2){
        if (opcao === 'opcao1') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=1
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
                teste1.classList.toggle('perdeu')
            }else{window.alert("Antes de continuar, recomece a lição")}
            
            
          
            
        } else if (opcao === 'opcao2') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=2
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
                teste1.classList.toggle('perdeu')
            }else{window.alert("Antes de continuar, recomece a lição")}
            
             
        
        } else if (opcao === 'opcao3') {
            if(errou==0){
                contador=3
                
                teste1.textContent = conteudos[contadorOpIn];
                contadorOpIn++
                atualizarOpcoes()
            }else{window.alert("Antes de continuar, recomece a lição")}
        } else if (opcao === 'opcao4') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=2
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
                teste1.classList.toggle('perdeu')
            }else{window.alert("Antes de continuar, recomece a lição")}
            
             
         
        } 
    }else if(contadorOpIn==3){
        if (opcao === 'opcao1') {
            if(errou==0){
                contador=1
                
                teste1.textContent = conteudos[contadorOpIn];
                contadorOpIn++
                atualizarOpcoes()
            }else{window.alert("Antes de continuar, recomece a lição")}
        } else if (opcao === 'opcao2') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=2
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
                teste1.classList.toggle('perdeu')
            }else{window.alert("Antes de continuar, recomece a lição")}
            
                             
        } else if (opcao === 'opcao3') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=3
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
                teste1.classList.toggle('perdeu')
            }else{window.alert("Antes de continuar, recomece a lição")}
            
             
            
        } else if (opcao === 'opcao4') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=4
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
                teste1.classList.toggle('perdeu')
            }else{window.alert("Antes de continuar, recomece a lição")}
            
             
        }   
        console.log(contadorOpIn)
    }else if(contadorOpIn==4){
        if (opcao === 'opcao1') {
            if(errou==0){
                contador=1
                teste1.textContent = conteudos[contadorOpIn];
                contadorOpIn++
                //===========================================================
                //ganhou 
                teste1.classList.toggle('ganhou')
                
                //===========================================================
                opcao1.textContent="Meus"
                opcao2.textContent="Parabéns"
                opcao3.textContent="Você"
                opcao4.textContent="ganhou!"
                finalizado=1
                const informacao = document.createElement("article");
                informacao.innerHTML=`
                <h1> Como foi feito o jogo: </h1>
                <h3>Usando addEventListener:</h3>
                <p>Este é o método mais recomendado, pois permite adicionar múltiplos manipuladores de eventos ao mesmo elemento sem substituir os anteriores. Ele também oferece mais controle sobre o evento.</p>
                <p>Exemplo: document.getElementById('botaoOpcao').addEventListener('click', minhaFuncao);</p>
                
                <pre>
                const botaoOpcao = document.getElementById('botaoOpcao');
                botaoOpcao.addEventListener('click', function() {
                    alert('Botão clicado!');
                    alert("aqui dentro, você coloca o código")
                });
                </pre>
                
                <h2>O botão de reiniciar</h2>
                o botao de reiniciar foi feito sendo uma função,sendo chamada quando o usúario errasse, como:
                <pre> 
                function exibirBotaoReiniciar() {
                    contadorBotao++
                    if(contadorBotao==1){
                    const botaoReiniciar = document.createElement("button");
                    botaoReiniciar.textContent = "Reiniciar";
                    botaoReiniciar.classList.add("reiniciar");
                    blocao.appendChild(botaoReiniciar);
                }
                </pre>
                <h2>Erros e acertos </h2>
                ao errar, dava um toggle em uma classe que deixava vermelho, e ao finalizar, uma que deixava verde
                <br>
                <h2>E os conteúdos? </h2>
                foram feitos dentro de um array, e quando a pessoa acertava, passava pro proximo indice
                <br>
                <h2>E o que isso tudo quer dizer? </h2>
                Isso quer dizer que, com o "básico", você já consegue montar um jogo interativo e interessante, espero que tenha gostado :)
                `

                
                blocao.append(informacao)
                
            }else{window.alert("Antes de continuar, recomece a lição")}
          
            
            
        } else if (opcao === 'opcao2') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=2
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
                teste1.classList.toggle('perdeu')
            }else{window.alert("Antes de continuar, recomece a lição")}
            
             
            
        } else if (opcao === 'opcao3') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=3
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
                teste1.classList.toggle('perdeu')
            }else{window.alert("Antes de continuar, recomece a lição")}
            
             
            
        } else if (opcao === 'opcao4') {
            if(errou==0){
                opcaoSelecionada = 'Texto da opção 2';
                contador=4
                window.alert("errado")
                exibirBotaoReiniciar()
                errou++
                teste1.classList.toggle('perdeu')
            }else{window.alert("Antes de continuar, recomece a lição")}
            
            
           
        }
}

    teste1.textContent == opcaoSelecionada;
    
    
}



// Gerar um número aleatório entre 0 e 4


//console.log(conteudos[0])

//console.log(alea);
//console.log(conteudos[alea]);
