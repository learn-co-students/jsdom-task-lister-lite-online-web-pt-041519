const tasks = []

const addToTask = el => {
    const ul = document.querySelector('#tasks')
    ul.appendChild(el)
}

const clearTasks = () => {
    const ul = document.querySelector('#tasks')
    ul.innerHTML = ''
}

const handleSubmit = e => {
        e.preventDefault()
        e.stopImmediatePropagation()
        const input = e.target.querySelector('input#new-task-description')
        const val = input.value
        if(val === ""){ return }
        const priority = e.target.querySelector('select').selectedIndex
        tasks.push([val, priority])
        displayTasks()
        input.value = ''
}

const displayTasks = (arr = tasks) => {
    const sortedTasks = arr.sort( (a,b) => a[1] - b[1])
    const els = sortedTasks.map( el => listElement(el[0], el[1]))
    clearTasks()
    for(let el of els){
        addToTask(el)
    }
}