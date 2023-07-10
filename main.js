// console.log(DataService.getData());
const todos = DataService.getData();

const manager = new Manager(todos);
console.log(manager);

function render(){

    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML= ''; //per ricreare l'html con il container vuoto


    for(const todo of manager.todoArray){
        const div = document.createElement('div');
        div.classList.add('todo-card');
        if (todo.isCompleted){
            // div.classList.add('todo-completed');
            div.style.borderColor='lime';
        }

        const titleStrong=document.createElement('strong');
        const titleNode=document.createTextNode(todo.title);

        titleStrong.appendChild(titleNode);
        div.appendChild(titleStrong);

        
        const dateSpan = document.createElement('span');
        const dateNode = document.createTextNode(todo.creationDate.toISOString()); //trasforma to ISO

        dateSpan.appendChild(dateNode);
        div.appendChild(dateSpan);

        const completeBtn= document.createElement('button');
        const completeNode=document.createTextNode(todo.isCompleted? ' da completare' : 'completato');
        completeBtn.addEventListener('click', () => {
            todo.isCompleted = !todo.isCompleted; 
            render();
        });
        // completeBtn.addEventListener('mouseover', () => div.style.borderWidth='3px');
        // completeBtn.addEventListener('mouseleave', () => div.style.borderWidth='0px');
        
        completeBtn.appendChild(completeNode);
        div.appendChild(completeBtn);

        todoContainer.appendChild(div);
    }
}

render();






// function render2(){

//     const todoContainer = document.getElementById('todo-container');
//     todoContainer.innerHTML= ''; //per ricreare l'html con il container vuoto
    

//     for (let index = 0; index < manager.todoArray.length; index++) {

//         const todo = manager.todoArray[index];

//         const template = `<div class="todo-card ${todo.isCompleted ? 'todo-completed' : '' }">
//                             <strong>${todo.title}</strong>
//                             <span>${todo.creationDate.toISOString()}</span>
//                             <button id="complete-btn${index}">completato</button>
//                           </div> `;
//         todoContainer.innerHTML+=template;

//     }


//     for (let index = 0; index < manager.todoArray.length; index++) {

//         const todo = manager.todoArray[index];
//         const completeBtn=document.getElementById('complete-btn'+index);
//         completeBtn.addEventListener('click', () => {
//             todo.isCompleted = !todo.isCompleted; 
//             render2();
//         });
//     }

// }

// render2();
function orderByTitle(){

    manager.orderTodosByTitle();
    render();
}

function orderByDate(){
    manager.orderTodosByDate();
    render();
}