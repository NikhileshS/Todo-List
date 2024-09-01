import './styles.css';
import {createbtn,projbtnfunction} from './newproject'
import { createcontainer } from "./switchingmechanism";
import { addtaskfun } from './addtask';

const taskDialog = document.querySelector('.task-dialog');
const projectDialog = document.querySelector('.project-dialog');
const exit = document.querySelector('.delete');
const submit = document.querySelector('.submit');


// DOM elements of the Task Button 
submit.addEventListener('click',()=>{
    addtaskfun();
    taskDialog.close();
    const form = document.querySelector('.taskform').reset();
})

exit.addEventListener('click',() =>{
    taskDialog.close();
    const form = document.querySelector('.taskform').reset();
})
//

// DOM elements of the Project Btn
if(localStorage.getItem('proj') === null){

    const projectbtn = document.querySelector('.add-proj').addEventListener('click',()=>{
        projectDialog.showModal();
    });
}
else{
    const sidebar = document.querySelector('.sidebar')
    sidebar.innerHTML = localStorage.getItem('proj')
    const projectbtn = document.querySelector('.add-proj').addEventListener('click',()=>{
        projectDialog.showModal();
    });
    const btn = document.querySelectorAll('.new-project')
    btn.forEach((e)=>{
        projbtnfunction(e);
    })
    
}

const projectsubmitbtn = document.querySelector('.proj-submit').addEventListener('click',()=>{

        createbtn();
        createcontainer();
        projectDialog.close();
        const form = document.querySelector('.projectform').reset()
    })


const projectcancel = document.querySelector('.proj-delete').addEventListener('click',() =>{
    projectDialog.close();
    const form = document.querySelector('.projectform').reset()
})
// 
