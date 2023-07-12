class Manager {


    constructor(todoArray){
        this.todoArray=todoArray;
    
        if(!todoArray){
            const todoArray=StorageService.loadTodos();
            if(todoArray){
                this.todoArray=todoArray;
            }else{
                this.todo=[];
            }
        }else{
            this.todoArray=todoArray;
        }
    }

    addTodo(todo){
        this.todoArray.push(todo);
    }


    orderTodosByTitle(){
        this.todoArray.sort((todo1,todo2) => todo1.compareByTitle(todo2));
    }


    orderTodosByDate(){
        this.todoArray.sort((todo1,todo2) => todo1.compareByDate(todo2));
    
    }

    changeCompleteStatus(index){
        const todo = this.todoArray[index];
        todo.isCompleted = !todo.isCompleted;
        StorageService.saveData(this.todoArray);
    }

    deleteTodo(index){        
        this.todoArray.splice(index,1);
        StorageService.saveData(this.todoArray);
    }

    addTodoWithButton(title){
        const newTodo = new Todo(title);
        this.addTodo(newTodo);
        StorageService.saveData(this.todoArray);

    }


}
