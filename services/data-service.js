class DataService{


    static getData(){
        const todo1 = new Todo('comprare il latte', false,new Date(2023,6,8));
        const todo2 = new Todo('scrivere una lettera alla nonna', false,new Date(2023,5,3));
        const todo3 = new Todo('studiare javascript', false,new Date(2023,4,1));
        const todo4 = new Todo('pagare la bolletta dell\'enel', false,new Date(2023,6,8));
        const todo5 = new Todo('comprare il cipo per il cane', true ,new Date(2023,6,8));
  
        const todoArray=[todo1,todo2,todo3,todo4,todo5,];
        return todoArray;
    }
}