
// Adding entered data in the list format 

const todoLists = document.querySelector(".todoLists");
const listValue = document.querySelector(".todoValue");
let todoListValue = [];


const getTodoListFromLS = () => {
    return JSON.parse(localStorage.getItem("todoyoutube")) || [];
};



// variable declaration to create a local storage
const addTodoListLocalStorage = (todo) => {
    return localStorage.setItem("todoyoutube", JSON.stringify(todo));
};



const showTodoList = () => {
    todoListValue = getTodoListFromLS();
    todoListValue.forEach((curTodo) => {
        const liElement = document.createElement("li");
        liElement.innerHTML = newTodo;
        todoLists.append(liElement);
    });
};




const removeTodoList = (e) => {
    console.log(e.target.textContent);
    let currentTodo = e.target;
    console.log(todoListValue);

    updatedTodoList = todoListValue.filter((curTodoValue) => curTodoValue != currentTodo.textContent);

    addTodoListLocalStorage(updatedTodoList);
    currentTodo.remove();
    console.log(updatedTodoList);

};

const addTodoList = (e) => {
    e.preventDefault();



    todoListValue = getTodoListFromLS();
    let newTodo = listValue.value.trim();
    console.log(newTodo);


    listValue.value = "";

    if (newTodo.length != 0 && !todoListValue.includes(newTodo)) {
        console.log(typeof todoListValue);
        todoListValue.push(newTodo);
        todoListValue = [...new Set(todoListValue)]



        // function declaration to create a local storage
        addTodoListLocalStorage(todoListValue);
        // to display the list items which is entered into the input field 
        const liElement = document.createElement("li");
        liElement.innerHTML = newTodo;
        todoLists.append(liElement);
    }
    // console.log("Hello Js Best Course");



};

document.querySelector(".Addbutton").addEventListener("click", (e) => {
    addTodoList(e);
});


todoLists.addEventListener('click', (e) => removeTodoList(e));
