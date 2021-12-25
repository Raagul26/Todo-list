const todoText = document.getElementById("input-task")
const todoUl = document.getElementById("todo-ul")

function addTask()
{
    if(todoText.value.trim() == "")
    {
        alert("Enter your task in the above box")
    }
    else
    {
        const liTag = document.createElement('li')
        const spanText = document.createElement('span')
        const textNode = document.createTextNode(todoText.value.trim())
        spanText.appendChild(textNode)
        const spanRemove = document.createElement('span')
        spanRemove.classList.add('remove')
        spanRemove.innerHTML="<img src='x-button.png' height=30px width=30px/>"
        spanRemove.addEventListener('click',(e)=>{
            const img = e.target.parentElement
            const li = img.parentElement
            li.parentElement.removeChild(li)
        });
        liTag.appendChild(spanText);
        liTag.appendChild(spanRemove);
        todoUl.appendChild(liTag)
        todoText.value = ""
    }
}