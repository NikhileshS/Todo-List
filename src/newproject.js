import { switching } from "./switchingmechanism";
import { swap } from "./switchingmechanism";

const taskDialog = document.querySelector('.task-dialog');
let i = 0


const createbtn = function () {
    if(i!==6){
    containerfunction(i)
    i++
}
else{
    let arr = swap.arr
    for(x = 0;x<i;x++){
        if(arr[x] === 0){
            containerfunction(x)
        }
    }
    alert('You cant have more than 6 projects')
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
    })
    sidebar.appendChild(btn);
}



export {createbtn}