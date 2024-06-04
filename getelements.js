// const campoKeyUp = document.querySelector("#campo-keyup");

// const produtos = document.querySelectorAll('.div-getelements2')

// // funcao para capturar o soltar da tecla
// campoKeyUp.addEventListener("keyup", () =>{
//     const valCampo = campoKeyUp.value.toLowerCase()
//     const tamanhoCampo = valCampo.length

//     for (let i = 0; i < produtos.length; i++) {
//         let valProduto = produtos[i].textContent.toLowerCase()
//         valProduto = valProduto.substring(0, tamanhoCampo)

//         if(valCampo != valProduto){
//             produtos[i].classList.add("invisivel")
//             produtos[i].classList.remove("inline-block")
//         } else{
//             produtos[i].classList.add("inline-block")
//             produtos[i].classList.remove("invisivel")
//         }
//     }
// })

// const campoKeyUp = document.querySelector("#campo-keyup");
// const produtos = document.querySelectorAll('.div-getelements2')

// campoKeyUp.addEventListener("keyup", () => {
//     const valCampo = campoKeyUp.value.toLowerCase()
//     const tamanhoCampo = valCampo.length

//     for (let i = 0; i < produtos.length; i++) {
//         let valProduto = produtos[i].textContent.toLowerCase()
//         valProduto = valProduto.substring(0, tamanhoCampo)

//         if(valCampo != valProduto){
//             produtos[i].classList.add("invisivel")
//             produtos[i].classList.remove("inline-block")
//         } else{
//             produtos[i].classList.add("inline-block")
//             produtos[i].classList.remove("invisivel")
//             // Destaca a palavra digitada em vermelho
//             const regex = new RegExp(valCampo, 'gi');
//             const textoDestacado = produtos[i].textContent.replace(regex, (match) => `<span style="color: red;">${match}</span>`);
//             produtos[i].innerHTML = textoDestacado;
//         }
//     }
// })





const campoKeyUp = document.querySelector("#campo-keyup");
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
      yupi.play();
      // pergunta.innerHTML =
      //   "Tente capturar todos os elementos que estão presentes na divmuitolegal";
    } else if (valCampo == "body") {
      span1[i].classList.remove("certa");
      span2[i].classList.add("errado");
      erro.play()
    } else if (valCampo == "divmuitolegal") {
      span1[i].classList.remove("certa");
      span3[i].classList.add("errado");
      erro.play()
    } else if (valCampo == "") {
      span1[i].classList.remove("certa");
      span2[i].classList.remove("errado");

    }

// if (valCampo == "divmuitolegal") {
//   span1[i].classList.remove("errado");
//   span3[i].classList.add("certa");
// }else if (valCampo == "divmuitolegal") {
//   span1[i].classList.add("errado");
//   span3[i].classList.remove("certa");
// } else if (valCampo == "") {
//   span1[i].classList.remove("certa");
//   span3[i].classList.remove("errado");
// }
}
})