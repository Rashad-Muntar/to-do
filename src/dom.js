import { projectFactory } from './modules/project'

const EXISTING_DATA = JSON.parse(localStorage.getItem('Projects')) || []

const content = document.getElementById('content')
const sideBarproject = document.querySelector('.projects')

// const projectForm = () => {


//     let projectForm = document.createElement('div')
//     let form = document.createElement('form')
//     let input = document.createElement('input')
//     let date = document.createElement('input')
//     let select = document.createElement('select')
//     let textarea = document.createElement('textarea')
//     let submit = document.createElement('input')

//     projectForm.classList.add('projectForm', 'd-flex', 'flex-column', 'justify-content-center');
//     form.classList.add('formBackground', 'd-flex', 'flex-column', 'col-4', 'justify-content-center');

//     input.setAttribute('type', 'text')
//     date.setAttribute('type', 'date')
//     submit.setAttribute('type', 'submit')
//     submit.value = 'New project'
//     input.setAttribute('placeholder', 'Enter Project Title')

//     input.setAttribute('id', 'title')
//     date.setAttribute('id', 'date')
//     select.setAttribute('id', 'priority')
//     textarea.setAttribute('id', 'desc')
//     submit.setAttribute('id', 'submit')
 
     
 
//     form.appendChild(input)
//     form.appendChild(date)
//     form.appendChild(textarea)
//     form.appendChild(select)
//     form.appendChild(submit)
   
//     projectForm.appendChild(form)
//     content.appendChild(projectForm)
// }

const projectConstructor = () => {
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

const allProjects = () => {
    for(let i = 0; i < EXISTING_DATA.length; i++){
        let projectTitle = document.createElement('p')
        projectTitle.innerHTML = EXISTING_DATA[i].title
        sideBarproject.appendChild(projectTitle)
    }
}

const displayProjects = () => {
    document.querySelector('.project').addEventListener('click', (e) => {
        document.querySelector('.projectList').classList.toggle('hide')
    })
}



export { createProject, displayProjects, allProjects}

