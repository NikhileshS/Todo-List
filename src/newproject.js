import { switching } from "./switchingmechanism";


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
    })
    sidebar.appendChild(btn);
    i++
}




export {createbtn}