
let temp = -1;
const swap = {
    arr: []
}


const switching = function (e){
    const container = document.querySelector('.content');
        if(temp === -1){
            temp = e.id
            container.innerHTML = swap.arr[temp];
        }
        else{
            if(e.id === temp){
                container.innerHTML = swap.arr[temp];
            }
            else{
            swap.arr[temp] = container.innerHTML
            temp = e.id
            container.innerHTML = swap.arr[temp];
            }
        }
    }


const createcontainer = function () {
    if(swap.arr.length !== 6){
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

        swap.arr.push(content.innerHTML);
        console.log(swap.arr)
}
   }

export {switching,createcontainer}
export {swap}
