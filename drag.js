const dragbox = document.getElementById("dragbox");

const blocks_positions = [];
const initial_blocks = dragbox.innerText.trim().split(" ");
dragbox.innerHTML = "";
dragbox.addEventListener("mouseover", (e) => {
  moveCursor(e.layerX, e.layerY);
});

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

function populateBox(list) {
  list.forEach((item) => {
    const block = createBlock(item);
    dragbox.appendChild(block);
    blocks_positions.push([block.offsetLeft, block.offsetTop]);
  });
}

function moveCursor(x, y) {
  dragbox.removeChild(cursor);
  let minY = blocks_positions[0][1];
  let minX = blocks_positions[0][0];
  blocks_positions.forEach((position, index) => {
    if (
      Math.abs(position[1] - y) <= minY &&
      Math.abs(position[0] - x) <= minX
    ) {
      console.log(position, index);
      console.log(minY, minX);
      console.log(y, x);
      minY = Math.abs(position[1] - y);
      minX = Math.abs(position[0] - x);
      dragbox.insertBefore(cursor, dragbox.children[index]);
    }
  });
}
