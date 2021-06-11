import './main.scss';

import { createProject, 
         displayProjects, 
         allProjects, 
         todoConstructor, 
         createTodo, 
         mainProjectDisplay,
        deleteEvent,
        todoFormDisplay,
        todoDelete,
        completeEvent,
        todoColors,
        uppdateProjectList
        } from './dom'

import {defProject} from './modules/project'


defProject()
createProject()
displayProjects()
allProjects()
todoConstructor()
createTodo()
mainProjectDisplay()
deleteEvent()
todoFormDisplay()
todoDelete()
completeEvent()
todoColors()