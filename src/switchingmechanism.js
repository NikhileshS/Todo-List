import { remover,edit,complete,description } from "./edittask";

if((localStorage.getItem('swap') == null)){
    const swap = {
        arr: []
    }
    localStorage.setItem('swap',JSON.stringify(swap))
}

if (localStorage.getItem('id') === null ){
    let temp = -1;
    localStorage.setItem('id',temp)
}




const switching = function (e){
    let temp = localStorage.getItem('id')
    const swap = JSON.parse(localStorage.getItem('swap'))
    const container = document.querySelector('.content');
        if(temp == -1){
            temp = e.id
            container.innerHTML = swap.arr[temp];
            console.log('KO2')
            remover()
            edit()
            complete()
            description()
            localStorage.setItem('swap',JSON.stringify(swap))
            localStorage.setItem('id',temp)

        }
        else{
            if(e.id != temp){
                if(container.innerHTML == ""){
                    temp = e.id;
                    console.log('KO')
                    container.innerHTML = swap.arr[temp]
                    remover()
                    edit()
                    complete()
                    description()
                    localStorage.setItem('swap',JSON.stringify(swap))
                    localStorage.setItem('id',temp)
                }
                else{
                    swap.arr[temp] = container.innerHTML
                    localStorage.setItem('swap',JSON.stringify(swap))
                    console.log('ksi')
                    temp = e.id
                    container.innerHTML = swap.arr[temp];
                    console.log(swap.arr)
                    remover()
                    edit()
                    complete()
                    description()
                    localStorage.setItem('swap',JSON.stringify(swap))
                        localStorage.setItem('id',temp)
                
                }
            }
            else{
            for(let x = 0;x<6;x++){
                if(swap.arr[x] == ''){
                    if(e.id == temp){
                        container.innerHTML = swap.arr[temp];
                        console.log('KO4')
                        remover()
                        edit()
                        complete()
                        description()
                    }
                    else{
                        container.innerHTML = swap.arr[x];
                        console.log('KO6')
                        remover()
                        edit()
                        complete()
                        description()
                        localStorage.setItem('swap',JSON.stringify(swap))
                        localStorage.setItem('id',x)
                    }
                }
            }
            }
        }
    }


const createcontainer = function () {

    const swap = JSON.parse(localStorage.getItem('swap'))

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
        localStorage.setItem('swap',JSON.stringify(swap))
    }   
   }

export {switching,createcontainer}

