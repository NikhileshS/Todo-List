const taskdialog = document.querySelector('.edit-dialog');

const editfunc = function (titlevalue,taskvalue,checked){

    taskdialog.showModal()

    const title = document.getElementById('edit-title');
    const task = document.getElementById('edit-task');
    const prior = document.getElementById('edit-Priority');

    title.value = titlevalue;
    task.value = taskvalue;
    prior.checked = checked;

}

export {editfunc}