import { editfunc } from "./edittask";

const addtaskfun = function (){
    const title = document.getElementById('title').value;
    const task = document.getElementById('task').value;
    const prior = document.getElementById('Priority').checked;

    if(title === '' | task === ''){
        alert("Fill the valid details");
        const form = document.querySelector('.taskform').reset();
    }
    else{
        container(title, task,prior);
    }
}

const container = function (title,task,prior){

    const swap = localStorage.getItem('swap')

    const cont = document.createElement('div');
    const tasktitle = document.createElement('div');
    const taskdesc = document.createElement('div');
    const removebtn = document.createElement('btn');
    const content = document.querySelector('.content');
    const complete = document.createElement('btn');
    const btncon = document.createElement('div');
    const editbtn = document.createElement('btn');
    const undo = document.createElement('btn');
    const descdialog = document.querySelector('.Description')
    const desc = document.querySelector('.taskdetail')
    const description = document.createElement('div')
    const priority = document.createElement('div')

    description.textContent = task
    priority.textContent = prior


    description.classList.add('taskdescription')
    priority.classList.add('taskpriority')
    cont.classList.add("taskcont");
    tasktitle.classList.add('tasktitle');
    taskdesc.classList.add('taskdesc');
    complete.classList.add('completed');
    editbtn.classList.add('editbtn')
    btncon.classList.add('btncon');
    undo.classList.add('completed');

    tasktitle.textContent = `${title}`;
    taskdesc.textContent = 'Description';
    removebtn.innerHTML = 'Remove'
    removebtn.classList.add('removebtn')
    complete.innerHTML = 'Completed';
    editbtn.innerHTML = 'Edit';
    undo.textContent = 'Undo'

    if(prior){
        cont.style.border = 'solid';
        cont.style.borderColor = 'red';
    }

    // Edit btn function 
    const editfn = function (){
        const edit = document.querySelectorAll('.editbtn')
    edit.forEach((e)=>{
        e.addEventListener('click',()=>{
            const cont = e.closest('.taskcont');
            const btncon = e.closest('.btncon')
            const priority = btncon.previousElementSibling
            const description = priority.previousElementSibling
            const tasktitle = description.previousElementSibling
    
            editfunc(tasktitle,description,priority); 
            // Submits and responsible for making changes to the task when updated
            const editsubmit = document.querySelector('.edit-submit');
            editsubmit.onclick = function () {
                tasktitle.textContent = document.getElementById('edit-title').value;
                description.innerHTML = document.getElementById('edit-task').value;

                const editprior = document.getElementById('edit-Priority');
                if (editprior.checked) {
                    cont.style.border = 'solid';
                    cont.style.borderColor = 'red';
                    priority.textContent = 'true';
                } else {
                    cont.style.border = 'solid';
                    cont.style.borderColor = 'rgba(8, 8, 8, 0.548)';
                    priority.textContent = 'false';
                }
            };
    
            const editcancel = document.querySelector('.edit-delete');
            editcancel.onclick = function () {
                const taskdialog = document.querySelector('.edit-dialog');
                taskdialog.close();
            };
        })
    })
    }

    // Checks if the task is completed or not 
    complete.addEventListener('click',()=>{
        cont.style.border = 'solid';
        cont.style.borderColor = 'green';
        btncon.removeChild(complete);
        btncon.appendChild(undo);
    })

    undo.addEventListener('click',()=>{
        cont.style.border = 'solid';
        if(priority.textContent == 'true'){
            cont.style.borderColor = 'red';
        }
        else{
            cont.style.borderColor = 'rgba(8, 8, 8, 0.548)';
        }
        btncon.removeChild(undo);
        btncon.appendChild(complete)
    })

    // responsible for Displaying description of the task
    taskdesc.addEventListener('click',()=>{
        desc.innerHTML = description.innerHTML
        descdialog.showModal();
    })

    const close = document.querySelector('.close').addEventListener('click',()=>{
        descdialog.close();
    })

    // responsible for Deleting the task
    removebtn.addEventListener('click',()=>{
        content.removeChild(cont);
    })

    cont.appendChild(tasktitle);
    cont.appendChild(description)
    cont.appendChild(priority)
    btncon.appendChild(taskdesc);
    btncon.appendChild(editbtn);
    btncon.appendChild(removebtn);
    btncon.appendChild(complete);
    cont.appendChild(btncon)
    content.appendChild(cont);
    editfn()

    let id = localStorage.getItem('id')
    let idnum = content.innerHTML
    swap.arr[id] = idnum;
    localStorage.setItem('swap',JSON.stringify(swap))
}

export {addtaskfun}