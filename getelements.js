const campoKeyUp = document.querySelector("#campo-keyup");
const campoKeyUp3 = document.querySelector("#campo-keyup3");
const html = document.querySelectorAll(".div-getelements2");
const span1 = document.querySelectorAll(".span1");
const span2 = document.querySelectorAll(".span2");
const span3 = document.querySelectorAll(".span3");
const pergunta = document.querySelector("#pergunta");
const alternativa = document.querySelector("#alternativa");
var yupi = document.getElementById("yupi");
var erro = document.getElementById("erro");

// document.getElementById
campoKeyUp.addEventListener("keyup", () => {
  const valCampo = campoKeyUp.value.toLowerCase();
  const tamanhoCampo = valCampo.length;

  for (let i = 0; i < html.length; i++) {
    console.log(i);
    let valProduto = html[i].textContent.toLowerCase();
    valProduto = valProduto.substring(0, tamanhoCampo);



    if (valCampo == "divlegal") {
      span1[i].classList.add("certa");
      span2[i].classList.remove("errado");
      span3[i].classList.remove("errado");
      yupi.play();
      // pergunta.innerHTML =
      //   "Tente capturar todos os elementos que estão presentes na divmuitolegal";
    } else if (valCampo == "body") {
      span1[i].classList.remove("certa");
      span2[i].classList.add("errado");
      span3[i].classList.remove("errado");
      erro.play()
    // } else if (valCampo == "divmuitolegal") {
    //   span1[i].classList.remove("certa");
    //   span2[i].classList.remove("errado");
    //   span3[i].classList.add("errado");
    //   erro.play()
    } else if (valCampo == "") {
      span1[i].classList.remove("certa");
      span2[i].classList.remove("errado");
      span3[i].classList.remove("errado");
    }
  }
})


// document.getElementById
campoKeyUp.addEventListener("keyup", () => {
  const valCampo3 = campoKeyUp3.value.toLowerCase();
  const tamanhoCampo3 = valCampo3.length;

  for (let i = 0; i < html.length; i++) {
    console.log(i);
    let valProduto = html[i].textContent.toLowerCase();
    valProduto = valProduto.substring(0, tamanhoCampo3);



    if (valCampo3 == "divlegal") {
      span1[i].classList.add("certa");
      span3[i].classList.remove("errado");
      yupi.play();
      // pergunta.innerHTML =
      //   "Tente capturar todos os elementos que estão presentes na divmuitolegal";
    } else if (valCampo3 == "divmuitolegal") {
      span1[i].classList.remove("certa");
      span3[i].classList.add("errado");
      erro.play()
    } 
  }
})