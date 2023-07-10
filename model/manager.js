class Manager {


    constructor(todoArray = []){
        this.todoArray=todoArray;
    
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

    deleteTodo(index){

        this.todoArray.splice(index,1);

    }

    addTodoWithButton(title){

        const newTodo = new Todo(title);
        this.addTodo(newTodo);

    }


}
