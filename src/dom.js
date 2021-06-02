

let priorities = ['High', 'Medium', 'Low']

const content = document.getElementById('content')

const projectForm = () => {
    let projectForm = document.createElement('div')
    let form = document.createElement('form')
    let input = document.createElement('input')
    let date = document.createElement('input')
    let select = document.createElement('select')
    let textarea = document.createElement('textarea')

    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'Enter Project Title')
    date.setAttribute('type', 'date')


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
   
    projectForm.appendChild(form)
    content.appendChild(projectForm)
}

const newProject = () => {

}

export { projectForm }