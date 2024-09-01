import { switching } from "./switchingmechanism";
import { swap } from "./switchingmechanism";

const taskDialog = document.querySelector('.task-dialog');
let i = 0

const proj =  {
    arr : []
}

const createbtn = function () {
    if(i!==6){

    containerfunction(i)
    i++
}
else{
    for(let x = 0;x<6;x++){
        if(swap.arr[x] === ""){
            createtask(x)
            containerfunction(x)
            console.log(swap.arr)
            break
        }
    }
}
}

const containerfunction = function (i){

    const btn = document.createElement('btn');
    const sidebar = document.querySelector('.sidebar');
    let title = document.getElementById('project-title').value;

    btn.classList.add('new-project');
    btn.setAttribute('id',i)
    btn.innerHTML = title;

    btn.addEventListener('click',()=>{

        switching(btn)

        const taskbtn = document.querySelector('.add-btn').addEventListener('click',()=>{
            taskDialog.showModal();
        });

        const removeproj = document.querySelector('.remove-proj').addEventListener('click',()=>{

            const content = document.querySelector('.content');
            let id = btn.id;
            swap.arr[id] = '';
            content.innerHTML = ''
            sidebar.removeChild(btn)
    })
    })
    sidebar.appendChild(btn);
}


const createtask = function (x){
    
    const content = document.createElement('div');
    const taskbtn = document.createElement('button');
    const removeproj = document.createElement('button');
    taskbtn.classList.add('add-btn');
    taskbtn.innerHTML = 'Create Task'
    content.classList.add('content');
    removeproj.classList.add('remove-proj');
    removeproj.innerHTML = 'Remove Project'

    
    content.appendChild(removeproj)
    content.appendChild(taskbtn);

    swap.arr[x] = content.innerHTML
    console.log(swap.arr)

}


export {createbtn}