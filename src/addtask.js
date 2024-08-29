

const addtaskfun = function (){
    const title = document.getElementById('title').value;
    const task = document.getElementById('task').value;
    const prior = document.getElementById('Priority').value;

    if(title === '' | task === ''){
        alert("Fill the valid details");
        const form = document.querySelector('.taskform').reset();
    }
    else{
        container(title, task);
    }
}

const container = function (title,task){
    const cont = document.createElement('div');
    const tasktitle = document.createElement('div');
    const taskdesc = document.createElement('div');
    const removebtn = document.createElement('btn');
    const content = document.querySelector('.content');

    cont.classList.add("taskcont");
    tasktitle.classList.add('tasktitle');
    taskdesc.classList.add('taskdesc');

    tasktitle.textContent = `task : ${title}`;
    taskdesc.textContent = task;
    removebtn.innerHTML = 'Remove'
    removebtn.classList.add('removebtn')

    removebtn.addEventListener('click',()=>{
        content.removeChild(cont);
    })

    cont.appendChild(tasktitle);
    cont.appendChild(taskdesc);
    cont.appendChild(removebtn);
    content.appendChild(cont);

}

export {addtaskfun}