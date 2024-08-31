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

    editprior.checked = prior;

    cont.classList.add("taskcont");
    tasktitle.classList.add('tasktitle');
    taskdesc.classList.add('taskdesc');
    complete.classList.add('completed');
    editbtn.classList.add('editbtn')
    btncon.classList.add('btncon');

    tasktitle.textContent = `${title}`;
    taskdesc.textContent = 'Description';
    removebtn.innerHTML = 'Remove'
    removebtn.classList.add('removebtn')
    complete.innerHTML = 'Completed';
    editbtn.innerHTML = 'Edit';

    if(prior){
        cont.style.border = 'solid';
        cont.style.borderColor = 'red';
    }

    editbtn.addEventListener('click',()=>{
        editfunc(tasktitle.textContent,task,editprior.checked); 

        const editsubmit = document.querySelector('.edit-submit');
        editsubmit.addEventListener('click',()=>{
            tasktitle.textContent = document.getElementById('edit-title').value;
            if(editprior.checked){
                cont.style.border = 'solid';
                cont.style.borderColor = 'red';
            }
            else{
                cont.style.border = 'solid';
                cont.style.borderColor = 'rgba(8, 8, 8, 0.548)';
            }
        })
    })

    complete.addEventListener('click',()=>{
        cont.style.border = 'solid';
        cont.style.borderColor = 'green';
    })

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