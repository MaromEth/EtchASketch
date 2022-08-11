var tag = document.createElement("div");

var element = document.getElementById("new");


for(let i = 1; i<17; i++){
    
    var tag = document.createElement("div");
    tag.setAttribute('id', `row`)
    tag.setAttribute('tag', `${i}`)
    element.appendChild(tag);
    var elements = document.getElementById(`row`)
    for(let j = 1; j<17; j++){
        var tags = document.createElement("div");
        tags.setAttribute('id', `${j}`)
        elements.appendChild(tags)
        elements.removeAttribute("id")
        console.log(elements)
        
       // removeElement.removeAttribute('tag')
    }
}

