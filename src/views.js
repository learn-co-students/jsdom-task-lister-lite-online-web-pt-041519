const priorityColors = ['red', 'yellow', 'green']

function listElement(txt, priority){
    const li = document.createElement('li')
    li.innerText = txt
    const delBtn = document.createElement('button')
    delBtn.innerText = " X "
    delBtn.addEventListener('click', e => {
        e.target.parentNode.remove()
    })
    li.append(delBtn)
    li.style.background = priorityColors[priority]
    return li
}