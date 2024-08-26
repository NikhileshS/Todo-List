
let temp = -1;
let arr = [];



const switching = function (e){
    const container = document.querySelector('.content');
        if(temp === -1){
            temp = e.id
            container.outerHTML = arr[temp];
        }
        else{
            arr[temp] = container.outerHTML
            temp = e.id
            container.outerHTML = arr[temp];
        }
    }

const createcontainer = function () {
        const content = document.createElement('div');
        const taskbtn = document.createElement('button');

        taskbtn.classList.add('add-btn');
        content.classList.add('content');
        
        content.appendChild(taskbtn);

        arr.push(content.outerHTML);
        console.log(arr)
}

export {switching,createcontainer}
