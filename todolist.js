function add()
{
    var listitem=document.getElementById("list")
    var ui=document.getElementById("ui")
    var additem=document.createElement("li")
    additem.innerHTML=listitem.value +
            "<button onclick='onClick(event)'>DELETE</button> "
    ui.append(additem)
}
function onClick(event)
{
    event.target.parentElement.remove()
}
