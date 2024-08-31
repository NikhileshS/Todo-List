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

    const cont = document.createElement('div');
    const tasktitle = document.createElement('btn');
    const taskdesc = document.createElement('div');
    const removebtn = document.createElement('btn');
    const content = document.querySelector('.content');
    const complete = document.createElement('btn');
    const btncon = document.createElement('div');
    const editbtn = document.createElement('btn');
    const editprior = document.getElementById('edit-Priority');
    const undo = document.createElement('btn');
    const descdialog = document.querySelector('.Description')
    const desc = document.querySelector('.taskdetail')

    editprior.checked = prior;
    desc.innerHTML = task;

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
    editbtn.addEventListener('click',()=>{
        editfunc(tasktitle.textContent,desc.innerHTML,editprior.checked); 
        const editsubmit = document.querySelector('.edit-submit');

        editsubmit.addEventListener('click',()=>{
            tasktitle.textContent = document.getElementById('edit-title').value;
            desc.textContent = document.getElementById('edit-task').value;

            if(editprior.checked){
                cont.style.border = 'solid';
                cont.style.borderColor = 'red';
            }
            else{
                cont.style.border = 'solid';
                cont.style.borderColor = 'rgba(8, 8, 8, 0.548)';
            }
        })

        const editcancel = document.querySelector('.edit-delete').addEventListener('click',()=>{
            const taskdialog = document.querySelector('.edit-dialog');
            taskdialog.close()
        })
    })
    // Checks if the task is completed or not 
    complete.addEventListener('click',()=>{
        cont.style.border = 'solid';
        cont.style.borderColor = 'green';
        btncon.removeChild(complete);
        btncon.appendChild(undo);
    })

    undo.addEventListener('click',()=>{
        cont.style.border = 'solid';
        if(editprior.checked){
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
    btncon.appendChild(taskdesc);
    btncon.appendChild(editbtn);
    btncon.appendChild(removebtn);
    btncon.appendChild(complete);
    cont.appendChild(btncon)
    content.appendChild(cont);

}

export {addtaskfun}