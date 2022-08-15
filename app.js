var tag = document.createElement("div");
var element = document.getElementById("container");
var numberOfCells = window.prompt("enter the amount of rows you would like (max of 100)")
let cellHeight = 960/numberOfCells;
let cellHeightString = `${cellHeight}px`
var cellIdentifier = document.querySelectorAll('cell');


for(let i = 1; i<numberOfCells; i++){
    var tag = document.createElement("div");
    tag.setAttribute('id', `row`)
    tag.setAttribute('tag', `parent`)
    tag.setAttribute('height',`${cellHeightString}` )
    element.appendChild(tag);
    var elements = document.getElementById(`row`)
    for(let j = 1; j<numberOfCells; j++){
        var tags = document.createElement("div");
        tags.setAttribute('id', `cell`)
        tags.setAttribute('cell', `yes`)
        tags.setAttribute('parent', `${i}`)
        tags.setAttribute('tag', `cell`)
        tags.setAttribute('class', 'cell')
        tags.style.height = cellHeightString;
        tags.style.width = cellHeightString;
        elements.appendChild(tags)
        elements.removeAttribute("id")
    }
}
var cells = document.querySelectorAll('parent')
    addEventListener('mouseover', function(e) {
    const selectedCell = e.path[0]
    if(typeof selectedCell.getAttribute('parent') === 'string'){
        selectedCell.setAttribute('selected', 'true')
    }
})
var button = document.getElementById("button");
button.addEventListener('click', function(e) {
    var allCells = document.getElementsByClassName('cell');

    for(var i = 0; i < allCells.length; i++){
        allCells[i].removeAttribute("selected"); 
     }
})
