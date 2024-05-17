const dragbox = document.getElementById("dragbox");

const initial_blocks = dragbox.innerText.trim().split(" ");
dragbox.innerHTML = "";

populateBox(initial_blocks);

const cursor = document.createElement("div");
cursor.id = "cursor";
cursor.innerText = "|";
dragbox.appendChild(cursor);

function createBlock(text) {
  const block = document.createElement("div");
  block.className = "code-block";
  block.draggable = true;
  block.innerText = text;
  return block;
}

let whereToPlaceReference = null;

function populateBox(list) {
  list.forEach((item) => {
    const block = createBlock(item);
    dragbox.appendChild(block);
    block.addEventListener("dragstart", (e) => {
      block.classList.add("dragging");
    });
    block.addEventListener("dragend", (event) => {
      block.classList.remove("dragging");
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const elements = document.querySelectorAll(".code-block");
      let closestElement = null;
      let closestDistance = Infinity;
      elements.forEach(function (element) {
        const rect = element.getBoundingClientRect();
        const elementX = rect.left + rect.width / 2;
        const elementY = rect.top + rect.height / 2;

        const distance = Math.hypot(elementX - mouseX, elementY - mouseY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestElement = element;
        }
      });
      if (closestElement) {
        document
          .querySelectorAll(".highlight")
          .forEach((el) => el.classList.remove("highlight"));
        closestElement.classList.add("highlight");

        const closestRect = closestElement.getBoundingClientRect();
        const closestElementX = closestRect.left + closestRect.width / 2;

        if (mouseX < closestElementX) {
          dragbox.insertBefore(block, closestElement);
          whereToPlaceReference = closestElement;
        } else {
          try {
            dragbox.insertBefore(block, closestElement.nextSibling);
            whereToPlaceReference = closestElement.nextSibling;
          } catch {
            dragbox.insertBefore(block, closestElement);
            whereToPlaceReference = closestElement;
          }
        }
      }
    });
  });
}
