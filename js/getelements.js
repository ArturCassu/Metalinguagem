const campoKeyUp = document.querySelector("#campo-keyup");
const campoKeyUp3 = document.querySelector("#campo-keyup3");
const html = document.querySelectorAll(".div-getelements2");
const span1 = document.querySelectorAll(".span1");
const span2 = document.querySelectorAll(".span2");
const span3 = document.querySelectorAll(".span3");
const pergunta = document.querySelector("#pergunta");
const alternativa = document.querySelector("#alternativa");

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
      window.alert("Meus Parabéns, você conseguiu pegar todos os elementos presentes na divlegal")
     
      // pergunta.innerHTML =
      //   "Tente capturar todos os elementos que estão presentes na divmuitolegal";
    } else if (valCampo == "body") {
      span1[i].classList.remove("certa");
      span2[i].classList.add("errado");
      span3[i].classList.remove("errado");
      window.alert("tente pegar apenas a divlegal")
      
    } else if (valCampo == "divmuitolegal") {
      span1[i].classList.remove("certa");
      span2[i].classList.remove("errado");
      span3[i].classList.add("errado"); 
      window.alert("divmuitolegal não é um ID")
    } else if (valCampo == "") {
      span1[i].classList.remove("certa");
      span2[i].classList.remove("errado");
      span3[i].classList.remove("errado");
    } else if(valCampo != "divlegal"){
      span1[i].classList.remove("certa");
      span2[i].classList.remove("errado");
      span3[i].classList.remove("errado");
    }
  }
})