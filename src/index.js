import './styles.css';


const dialog = document.querySelector('dialog');

const btn = document.querySelector('.add-btn');
btn.addEventListener('click',()=>{
    dialog.showModal();
})

exit.addEventListener('click',() =>{
    dialog.close();
    form.reset();
})