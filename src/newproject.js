import { switching } from "./switchingmechanism";

const taskDialog = document.querySelector('.task-dialog');
let i = 0


const createbtn = function () {
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
    i++
}




export {createbtn}