import projectFactory from './modules/project'


const EXISTING_DATA = JSON.parse(localStorage.getItem('mainProjects')) || []

let priorities = ['High', 'Medium', 'Low']
let submitProject = document.getElementById('submit')

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

const projectConstructor = (e) => {
    e.preventDefault()

  let newProject = projectFactory(
    document.getElementById('title').value,
    document.getElementById('date').value,
    document.getElementById('priority').value,
    document.getElementById('desc').value
  )

    EXISTING_DATA.push(newProject)
    localStorage.setItem('mainProjects', JSON.stringify(EXISTING_DATA))
}


    submitProject.addEventListener('click', ()=>{
        console.log()
    })



export { projectForm, projectConstructor}