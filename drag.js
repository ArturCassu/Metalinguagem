const dragbox = document.querySelector(".dragbox");
const code_blocks = document.querySelectorAll(".code-block");

const initial_blocks = dragbox.innerText.trim().split(" ");
dragbox.innerHTML = "";
populateCode(initial_blocks);

function createBlock(text) {
  const block = document.createElement("div");
  block.className = "code-block";
  block.draggable = true;
  block.innerText = text;
  return block;
}

function populateCode(list){
  list.forEach((blockText) => {
    dragbox.appendChild(createBlock(blockText));
  });
}

code_blocks.forEach((block) => {
  let refElement;
  block.addEventListener("drag", (e) => {
    console.log(e.clientX, e.clientY);
    refElement = getClosest(e.clientX, e.clientY);
    displayShadow(block, refElement);
  });
  block.addEventListener("dragend", (e) => {
    console.log(e.clientX, e.clientY);
    refElement = getClosest(e.clientX, e.clientY);
    dropElement(block, refElement);
  });
});

function getClosest(mouseX, mouseY) {
  let closestElement = null;
  let closestDistance = Infinity;

  dragbox.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const elementX = rect.left + rect.width / 2;
    const elementY = rect.top + rect.height / 2;

    const distance = Math.hypot(elementX - mouseX, elementY - mouseY);

    // Find closest element
    if (distance < closestDistance) {
      closestDistance = distance;
      closestElement = element;
    }
  });

  let refElement;

  if (mouseX < closestElement) {
    refElement = closestElement;
  } else {
    refElement = closestElement.nextSibling;
  }

  return refElement;
}

function displayShadow(element,refElement) {
  if (element.nextSibling != refElement) {
    refElement.insertBefore(element, refElement);
  }
}

function dropElement(element, refElement) {}
