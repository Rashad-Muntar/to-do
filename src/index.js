import './main.scss';

import { createProject, displayProjects, allProjects } from './dom'

createProject()
displayProjects()
allProjects()


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