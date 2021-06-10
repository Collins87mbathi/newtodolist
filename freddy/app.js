//selectors

const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');


//events

todobutton.addEventListener('click',addTodo);
todolist.addEventListener('click', deleteCheck);




//functions

function addTodo(e){

    e.preventDefault();
    //create a todo div
   const tododiv = document.createElement("div");
   tododiv.classList.add("todo");
    //create li
   const newtodo = document.createElement('li');
   newtodo.innerText = todoinput.value;
   newtodo.classList.add('.todo-item');
   tododiv.appendChild(newtodo);
   //check mark button
   const completedbutton = document.createElement('button');
   completedbutton.innerHTML = '<i class ="fas fa-check"></li> ';
   completedbutton.classList.add("complete-btn");
   tododiv.appendChild(completedbutton);
          //delete button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class ="fas fa-trash"></li> ';
   trashButton.classList.add("trash-btn");
   tododiv.appendChild(trashButton);
    //append to list
    todolist.appendChild(tododiv);
    //clear todo input value
    todoinput.value="";
}


function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    //CHECK MARK
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
