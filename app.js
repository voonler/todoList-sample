//Selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");

//Event listeners
todoButton.addEventListener("click", addToDo); //Adds an event listener to the class todo-button
todoList.addEventListener("click", deleteCheck); //deleteCheck function carries out a function depending on the triggered event

//Functions
function addToDo(event){
    //Prevents form from submitting
    event.preventDefault()
    
    // console.log("Hello!")
    //Creates a Todo Div when button is clicked on 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create li with the class of todo-item. This allows styling later in css
    const newToDo = document.createElement("li");
    newToDo.innerText = todoInput.value; //takes in the value of todoInput
    newToDo.classList.add("todo-item");
    //Pack the newToDo under todoDiv
    todoDiv.appendChild(newToDo);
    //Check Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'; //Adds icon to the button
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Check Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'; //Adds icon to the button
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to todo List. This generates a new todo
    todoList.appendChild(todoDiv);

    //Clear todoInput value
    todoInput.value=""; //Removes text from input box after clicking the plus button

}

function deleteCheck(e){
    // console.log(e.target); Allows us to check which element did the user click on
    const item = e.target;
    //Delete the todo
    if (item.classList[0]=== "trash-btn"){
        const todo = item.parentElement; //remove the parent element instead of the item
        
        //Animation
        todo.classList.add("fall");
        //Waits for transition to end, then only remove todo
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });

    }

    if(item.classList[0]=== "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed"); //Allows the parent element to get a different class with different styling. Allows switching between classes
    }
}

