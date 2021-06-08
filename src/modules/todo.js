const todoFactory = (title, description, date, priority, completed) => {
    
    return {title, description, date, priority, completed}
}

function deleteTodo(index){
    for(let i = 0; i < EXISTING_DATA.length; i++){
        EXISTING_DATA[i].todos.splice(index, 1)
    }
    localStorage.setItem('Projects', JSON.stringify(EXISTING_DATA))
    location.reload()
  }

export  { todoFactory };
