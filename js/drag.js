const fase1 = `const containers = document.querySelectorAll(".code-line");`

const fase2 = `document.addEventListener('dragstart',(e)=>{
                  e.target.classList.add("dragging");
              });`

const fase3 = `document.addEventListener('dragend',(e)=>{
                  e.target.classList.remove("dragging");
              });`

const fase4 = `containers.forEach((linha)=>{
    linha.addEventListener("dragover", (e) =>{
      moverItem(linha,e.clientX)
    });});`

const fase5 = `function moverItem(linha, posicaoX){
    const dragging = document.querySelector(".dragging");
      const applyAfter=getNewPosition(linha,posicaoX);
      if(applyAfter){
        applyAfter.insertAdjacentElement("afterend",dragging);
      }else{
        linha.prepend(dragging);
      }}`

const fase6 = `function getNewPosition(column, posX) {
  const cards=column.querySelectorAll(".item:not(.dragging)");
  let result;
  for (let refer_card of cards) {
    const box=refer_card.getBoundingClientRect();
    const boxCenterX=box.x+box.width/2;
    if(posX>=boxCenterX)result=refer_card;
  }
  return result;
}`

const parabens = `<div class="vitoria"><h3>Exercícios concluído</h3><p>O <a href="./drag.txt" download="drag.txt">código</a> que você montou é o responsavel pelo arrastar dos blocos que você arrastou '-'</p></div>`

const fases = [
  fase1,
  fase2,fase3,fase4,fase5,fase6, 
  parabens
]
let fase

const instrucoes = [
  'Crie uma variável com todos os elementos com a classe "code-line"',
  'Adicione a classe "dragging" aos elementos que estiverem sendo arrastados',
  "Agora remova essa classe",
  'Agora, para cada elemento em "containers" adicione o evento de dragover que chama uma função para mover o item sendo arrastado',
  'Crie uma função para mover o item, inserindo adjacente ao elemento obtido na funcao "getNewPosition"',
  'Crie uma função que, percorrendo todos itens que não estiverem sendo arrastados, retornara o item mais próximo"'
]

const box = document.querySelector("#drag");

document.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
});

document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
  let codeLines = document.querySelectorAll(".code-line");
  check(codeLines,fase)
});

function createBlock(text) {
  const block = document.createElement("div");
  block.className = "code-block";
  block.draggable = true;
  block.innerText = text;
  return block;
}

function getNewPosition(column, posX) {
  const cards = column.querySelectorAll(".code-block:not(.dragging)");
  let result;
  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterX = box.x + box.width / 2;
    if (posX >= boxCenterX) result = refer_card;
  }
  return result;
}

function check(codeLines,fase){
  let cont = 0
  let quant = 0
  for (let i = 0; i < codeLines.length; i++) {
    quant += codeLines[i].children.length
    for (let j = 0; j < codeLines[i].children.length; j++) {
      const code = codeLines[i].children[j];
      const text = fase[i][j]
      console.log(text);
      if(code.textContent == text){
        code.classList.add("checked")
        cont += 1
      }else{
        code.classList.remove("checked")
        cont -= 1
      }
    }
  }
  console.log(cont, quant);
  if (cont == quant){
    bt_prox.classList.remove("bloqueado")
  }else{
    bt_prox.classList.add("bloqueado")
  }
}

function populateBox(text){
  let codeLines = document.querySelectorAll(".code-line");
  codeLines.forEach((item)=>{
    item.remove()
  })

  let list = text.split("\n").map((line)=>{return line.split(" ").filter((word)=>word!="")});
  fase = text.split("\n").map((line)=>{return line.split(" ").filter((word)=>word!="")});

  for (let i = 0; i < list.length; i++) {;
    for (let j = 0; j < list[i].length; j++) {
      const element = list[i][j];
      const y = Math.floor(Math.random() * list.length)
      const x = Math.floor(Math.random() * list[y].length)
      const foo = list[y][x]
      list[y][x] = element
      list[i][j] = foo
    }
  }

  for (let i = 0; i < list.length; i++) {
    const line = document.createElement("div");
    line.className = "code-line"
    for (let j = 0; j < list[i].length; j++) {
      const element = createBlock(list[i][j])
      line.appendChild(element)
    }
    box.appendChild(line)
  }

  codeLines = document.querySelectorAll(".code-line");
  codeLines.forEach((linha) => {
    linha.addEventListener("dragover", (e) => {
      moverItem(linha,e.clientX)
    });
  });
  function moverItem(linha, posicaoX){
    const dragging = document.querySelector(".dragging");
      const applyAfter = getNewPosition(linha, posicaoX);
      if (applyAfter) {
        applyAfter.insertAdjacentElement("afterend", dragging);
      } else {
        linha.prepend(dragging);
      }
  }
}

const bt_prox = document.querySelector(".proximo") 
function mudarfase(){
  let fase_atual = 0

  // const bt_ant = document.querySelector(".anterior") 
  const el_instrucoes = document.querySelector("#instrucoes") 

  populateBox(fases[fase_atual])
  el_instrucoes.innerText = instrucoes[fase_atual]
  
  // bt_ant.addEventListener("click", ()=>{
  //   if (!bt_ant.classList.contains("bloqueado")) {
  //     fase_atual -=1
  //     populateBox(fases[fase_atual])
  //     el_instrucoes.innerText = instrucoes[fase_atual]
  //     bt_ant.classList.remove("bloqueado")
  //   }
  //   if (fase_atual==0) {
  //     bt_ant.classList.add("bloqueado")
  //   }else{
  //     bt_ant.classList.remove("bloqueado")
  //   }
  //   if (fase_atual==3) {
  //     bt_prox.classList.add("bloqueado")
  //   }else{
  //     bt_prox.classList.remove("bloqueado")
  //   }
  // })
  bt_prox.addEventListener("click", ()=>{
    if (!bt_prox.classList.contains("bloqueado")) {
      fase_atual +=1
      el_instrucoes.innerText = instrucoes[fase_atual]
      bt_prox.classList.add("bloqueado")
    }if (fase_atual==fases.length-1) {
      bt_prox.classList.add("invisivel")
      let codeLines = document.querySelectorAll(".code-line");
      codeLines.forEach((item)=>{
        item.remove()
      })
      box.innerHTML = fases[fase_atual]
    }else{
      populateBox(fases[fase_atual])
    }
    // else{
    //   bt_prox.classList.remove("bloqueado")
    // }
    // if (fase_atual==0) {
    //   bt_ant.classList.add("bloqueado")
    // }else{
    //   bt_ant.classList.remove("bloqueado")
    // }
  })

  
}

mudarfase()