import { switching } from "./switchingmechanism";

const taskDialog = document.querySelector('.task-dialog');

if(localStorage.getItem('projstat') == null){
    let i = 0
    localStorage.setItem('projstat',i)
}

const createbtn = function () {
    let i = localStorage.getItem('projstat')
    const swap = JSON.parse(localStorage.getItem('swap'))

    if(localStorage.getItem('projstat')!= 6){

    containerfunction(localStorage.getItem('projstat'))
    i++
    localStorage.setItem('projstat',i)
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

    const swap = JSON.parse(localStorage.getItem('swap'))

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
            const swap = JSON.parse(localStorage.getItem('swap'))
            const content = document.querySelector('.content');
            swap.arr[btn.id] = '';
            content.innerHTML = ''
            localStorage.setItem('swap',JSON.stringify(swap))
            sidebar.removeChild(btn)
            localStorage.setItem('proj',sidebar.innerHTML)
    })
    })
    sidebar.appendChild(btn);
    localStorage.setItem('proj',sidebar.innerHTML)
}


const createtask = function (x){
    
    const swap = JSON.parse(localStorage.getItem('swap'))

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
    localStorage.setItem('swap',JSON.stringify(swap))
    console.log(swap.arr)

}

export {createbtn}
