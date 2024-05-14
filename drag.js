const code_blocks = document.querySelectorAll('.code-block');
const dragbox = document.querySelector('.dragbox');

const blocks_position = []

code_blocks.forEach(block => {

    block.setAttribute('draggable', 'true');

    blocks_position.push([block.offsetTop, block.offsetLeft]);

    block.addEventListener('dragstart', (e) => {
        block.classList.add('dragging');
    });
    block.addEventListener('dragend', (e) => {
        console.log(e);
        blocks_position.forEach((position, index) => {
            
        });

        block.classList.remove('dragging');
    });
});

function getTwoClossestBlocks() {
    blocks_position.forEach((position, index) => {
        
    });


    return [index1, index2];

}

console.log(blocks_position);