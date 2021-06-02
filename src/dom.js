import { projectFactory } from './modules/project'

const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || []

let arr = []
let priorities = ['High', 'Medium', 'Low']
const content = document.getElementById('content')


const projectForm = () => {
    let projectForm = document.createElement('div')
    let form = document.createElement('form')
    let input = document.createElement('input')
    let date = document.createElement('input')
    let select = document.createElement('select')
    let textarea = document.createElement('textarea')
    let submit = document.createElement('input')

    input.setAttribute('type', 'text')
    date.setAttribute('type', 'date')
    submit.setAttribute('type', 'submit')
    submit.value = 'New project'
    input.setAttribute('placeholder', 'Enter Project Title')

    input.setAttribute('id', 'title')
    date.setAttribute('id', 'date')
    select.setAttribute('id', 'priority')
    textarea.setAttribute('id', 'desc')
    submit.setAttribute('id', 'submit')


    for(let i  = 0; i  < priorities.length; i++){
        let option = document.createElement('option')
        option.value = i
        option.text = priorities[i]

        select.appendChild(option)
    }

    form.appendChild(input)
    form.appendChild(date)
    form.appendChild(textarea)
    form.appendChild(select)
    form.appendChild(submit)
   
    projectForm.appendChild(form)
    content.appendChild(projectForm)
}

const projectConstructor = (event) => {
    let project = projectFactory(
        document.getElementById('title').value,
        document.getElementById('desc').value,
        document.getElementById('date').value,
        document.getElementById('priority').value,
    )
    EXISTING_DATA.push(project)
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
    location.reload()
}


const createProject = () => {
    const newProBtn = document.getElementById('submit')
    newProBtn.addEventListener('click', projectConstructor)
}



export { projectForm, createProject }