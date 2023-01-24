const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.card');
// add event listners to fill

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// creating fucntion for the dragging
function dragStart() {
    this.className += ' hold'
    setTimeout(()=> this.className = "invisible", 0)
}
function dragEnd() {
    this.className = 'fill'
}

// boxes events


boxes.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('drop', dragDrop);
})

function dragOver(e) {
    e.preventDefault()
}
function dragEnter(e) {
    e.preventDefault()
    this.className += " hovered"
}
function dragLeave() {
    this.className = "card"
}
function dragDrop() {
    this.className = 'card'
    this.append(fill)
}