import './styles.css';
import {createbtn} from './newproject'
import { createcontainer } from "./switchingmechanism";

const taskDialog = document.querySelector('.task-dialog');
const projectDialog = document.querySelector('.project-dialog');
const exit = document.querySelector('.delete');


// DOM elements of the Task Button 
const taskbtn = document.querySelector('.add-btn').addEventListener('click',()=>{
    taskDialog.showModal();
});

exit.addEventListener('click',() =>{
    taskDialog.close();
    const form = document.querySelector('.taskform').reset();
})
//

// DOM elements of the Project Btn
const projectbtn = document.querySelector('.add-proj').addEventListener('click',()=>{
    projectDialog.showModal();
});

const projectsubmitbtn = document.querySelector('.proj-submit').addEventListener('click',()=>{
    createbtn();
    createcontainer();
    const taskbtn = document.querySelector('.add-btn')
    projectDialog.close();
    const form = document.querySelector('.projectform').reset()

});

const projectcancel = document.querySelector('.proj-delete').addEventListener('click',() =>{
    projectDialog.close();
    const form = document.querySelector('.projectform').reset()
})


// 
