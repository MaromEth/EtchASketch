var tag = document.createElement("div");

var element = document.getElementById("container");


for(let i = 1; i<17; i++){
    
    var tag = document.createElement("div");
    tag.setAttribute('id', `row`)
    tag.setAttribute('tag', `${i}`)
    element.appendChild(tag);
    var elements = document.getElementById(`row`)
    for(let j = 1; j<17; j++){
        var tags = document.createElement("div");
        tags.setAttribute('id', `${j}`)
        tags.setAttribute('tag', `cell`)
        //tags.setAttribute('selected', 'false')
        tags.setAttribute('parent', `${i}`)
        elements.appendChild(tags)
        elements.removeAttribute("id")
        console.log(elements)
        
     }
}
var cells = document.querySelectorAll('tag')
addEventListener('click', function(e) {
    //cells.setAttribute('selected', 'true')
    //tags.appendChild(cells)
//console.log(`selected ${cells.id}`)
//console.log(e.path[0])
    const selectedCell = e.path[0]
    console.log(selectedCell)
    //selectedCell.setAttribute('selected', 'true')
    selectedCell.toggleAttribute('selected')
//const cellClicked =  document.querySelector()
//cells.classList
    //this.toggleAttribute('selected')
})

