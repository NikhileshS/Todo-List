import './styles.css';
import {createbtn} from './newproject'
import { createcontainer } from "./switchingmechanism";
import { addtaskfun } from './addtask';
import { switching } from './switchingmechanism';
import { remover,edit,complete,description } from "./edittask";
const taskDialog = document.querySelector('.task-dialog');
const projectDialog = document.querySelector('.project-dialog');
const exit = document.querySelector('.delete');
const submit = document.querySelector('.submit');
const cont = document.querySelector('.content')

const close = document.querySelector('.close')
close.addEventListener('click',()=>{
    const description = document.querySelector('.Description').close();
})



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
        const swap = JSON.parse(localStorage.getItem('swap'))
        let temp = localStorage.getItem('id')
        const container = document.querySelector('.content')
        e.addEventListener('click',()=>{

            if(e.id == temp){
                let temp = localStorage.getItem('id')
                if(container.innerHTML !== ''){
                    console.log(temp)
                    console.log(e.id)
                    swap.arr[temp] = container.innerHTML
                    localStorage.setItem('swap',JSON.stringify(swap))
                    console.log('fhiwhf')
            
                }
                container.innerHTML = swap.arr[e.id];
                temp = e.id
                            remover()
                            edit()
                            complete()
                            description()
                            localStorage.setItem('id',temp)
            }
            else if(e.id != temp){
                switching(e)
            }
    
            const taskbtn = document.querySelector('.add-btn').addEventListener('click',()=>{
                taskDialog.showModal();
            })
            const removeproj = document.querySelector('.remove-proj').addEventListener('click',()=>{
        
            const content = document.querySelector('.content');
            swap.arr[e.id] = '';
            content.innerHTML = ''
            sidebar.removeChild(e)
            localStorage.setItem('swap',JSON.stringify(swap))
            localStorage.setItem('proj',sidebar.innerHTML)
            })
        })     
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
