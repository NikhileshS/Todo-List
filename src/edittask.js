const taskdialog = document.querySelector('.edit-dialog');

const editfunc = function (titlevalue,taskvalue,checked){
    taskdialog.showModal()

    const title = document.getElementById('edit-title');
    const task = document.getElementById('edit-task');
    const prior = document.getElementById('edit-Priority');

    title.value = titlevalue.textContent;
    task.value = taskvalue.textContent;
    if(checked.textContent == 'true'){
        prior.checked = true;
    }
    else{
        prior.checked = false
    }
}

//Responsible for deleting the task
const remover = function (){
    const removebtn = document.querySelectorAll('.removebtn');

    removebtn.forEach((btn) => {
        btn.addEventListener('click', function () {
    
            const container = btn.closest('.taskcont');

            if (container) {
                container.remove();
            }
        });
    });
}

//responsible for Editing the details in the task 
const edit = function (){
    const edit = document.querySelectorAll('.editbtn')
edit.forEach((e)=>{
    e.addEventListener('click',()=>{
        const cont = e.closest('.taskcont');
        const btncon = e.closest('.btncon')
        const priority = btncon.previousElementSibling
        const description = priority.previousElementSibling
        const tasktitle = description.previousElementSibling

        editfunc(tasktitle,description,priority); 
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

// Updates the status of the task as completed
const complete = function (){
    const completed = document.querySelectorAll('.completed')
    completed.forEach((e)=>{
        const cont = e.closest('.taskcont');
        const undo = document.createElement('btn');
        undo.classList.add('completed')
        undo.innerHTML = 'Undo';
        const btncon = e.closest('.btncon')
        const prior = btncon.previousElementSibling

        e.addEventListener('click',()=>{
        cont.style.border = 'solid';
        cont.style.borderColor = 'green';
        btncon.removeChild(e);
        btncon.appendChild(undo);
        })

        undo.addEventListener('click',()=>{
            cont.style.border = 'solid';
            if(prior.textContent == 'true'){
                cont.style.borderColor = 'red';
            }
            else{
                cont.style.borderColor = 'rgba(8, 8, 8, 0.548)';
            }
            btncon.removeChild(undo);
            btncon.appendChild(e)
        })
    
        
    })
}

// Allows viewing of the task description
const description = function (){
    const desc = document.querySelectorAll('.taskdesc')
    const taskdesc = document.querySelector('.taskdetail');
    const descdialog = document.querySelector('.Description')
    desc.forEach((e)=>{
        const btncon = e.closest('.btncon')
        const priority = btncon.previousElementSibling
        const description = priority.previousElementSibling
        e.addEventListener('click',()=>{
        taskdesc.innerHTML = description.innerHTML
        descdialog.showModal();
        })
    })
}

export {editfunc,remover,edit,complete,description}