const initialString = `const draggableElement = document.getElementById('draggable');
  draggableElement.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain','DraggedElement');
    draggableElement.style.opacity='0.5'; 
  });
  draggableElement.addEventListener('dragend', () => {
    draggableElement.style.opacity=1;
  });`.trim();

const initialLines = initialString.split("\n").map(line => line.trim().split(" ").filter(block => block.trim() !== ""));
const numberOfLines = initialLines.length;

const dragSection = document.getElementById("drag");

for (let i = 0; i < numberOfLines; i++) {
  const codeLine = document.createElement("div");
  codeLine.className = "code-line";

  const dragbox = document.createElement("div");
  dragbox.className = "dragbox";

  codeLine.appendChild(dragbox);
  dragSection.appendChild(codeLine);
}

const codeLines = document.querySelectorAll(".code-line");
const dragboxes = document.querySelectorAll(".dragbox");
const codeBlocks = [];

initialLines.forEach((line, lineIndex) => {
  line.forEach(blockText => {
    const block = createBlock(blockText);
    codeBlocks.push(block);
  });
});

shuffleArray(codeBlocks);

let currentDragboxIndex = 0;
codeBlocks.forEach(block => {
  dragboxes[currentDragboxIndex].appendChild(block);
  currentDragboxIndex = (currentDragboxIndex + 1) % dragboxes.length;
});

function createBlock(text) {
  const block = document.createElement("div");
  block.className = "code-block";
  block.draggable = true;
  block.innerText = text;
  return block;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getClosestLine(mouseX, mouseY) {
  let closestLine = null;
  let closestDistance = Infinity;
  let closestElement = null;

  for (let line of codeLines) {
    const rect = line.getBoundingClientRect();
    const lineX = rect.left + rect.width / 2;
    const lineY = rect.top + rect.height / 2;

    const distance = Math.hypot(lineX - mouseX, lineY - mouseY);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestLine = line;
    }

    for (let element of line.querySelectorAll(".code-block")) {
      const elementRect = element.getBoundingClientRect();
      const elementX = elementRect.left + elementRect.width / 2;
      const elementY = elementRect.top + elementRect.height / 2;

      const elementDistance = Math.hypot(elementX - mouseX, elementY - mouseY);

      if (elementDistance < closestDistance) {
        closestDistance = elementDistance;
        closestElement = element;
      }
    }
  }

  return { closestLine, closestElement };
}

for (let block of codeBlocks) {
  block.addEventListener("dragstart", (e) => {
    block.classList.add("dragging");
  });
  block.addEventListener("drag", (e) => {
    let { closestLine, closestElement } = getClosestLine(e.clientX, e.clientY);
    refElement = closestElement || closestLine.querySelector(".dragbox");
    displayShadow(block, refElement);
  });
  block.addEventListener("dragend", (e) => {
    block.classList.remove("dragging");
    let { closestLine, closestElement } = getClosestLine(e.clientX, e.clientY);
    refElement = closestElement || closestLine.querySelector(".dragbox");
    dropElement(block, refElement);
    check();
  });
}

function displayShadow(element, refElement) {
  if (refElement) {
    const parent = refElement.parentNode;
    const nextSibling = refElement.nextSibling;
    if (nextSibling && nextSibling.classList.contains("code-block")) {
      parent.insertBefore(element, nextSibling);
    } else {
      parent.appendChild(element);
    }
  }
}

function dropElement(element, refElement) {
  if (refElement) {
    const parent = refElement.parentNode;
    const nextSibling = refElement.nextSibling;
    if (nextSibling && nextSibling.classList.contains("code-block")) {
      parent.insertBefore(element, nextSibling);
    } else {
      parent.appendChild(element);
    }

    const line = parent.closest('.code-line');
    const blocksInLine = Array.from(line.querySelectorAll(".code-block"));
    if (blocksInLine.length === 1 && blocksInLine[0].classList.contains("placeholder")) {
      blocksInLine[0].remove();
    }
  }
}

function check() {
  codeLines.forEach((codeLine, lineIndex) => {
    const currentLineBlocks = Array.from(dragboxes[lineIndex].querySelectorAll(".code-block:not(.placeholder)"));
    const expectedLine = initialLines[lineIndex];

    currentLineBlocks.forEach((block, blockIndex) => {
      if (block.innerText === expectedLine[blockIndex]) {
        block.classList.add("correct");
      } else {
        block.classList.remove("correct");
      }
    });

    const placeholders = dragboxes[lineIndex].querySelectorAll(".placeholder");
    if (currentLineBlocks.length > 0) {
      placeholders.forEach(placeholder => placeholder.remove());
    }

    if (currentLineBlocks.length === 0) {
      const placeholder = createBlock("");
      placeholder.classList.add("placeholder");
      dragboxes[lineIndex].appendChild(placeholder);
    }
  });
}
