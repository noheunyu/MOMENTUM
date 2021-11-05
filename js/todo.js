const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(){
    console.log("")
}

function paintToDo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo;
    const button = document.createElement("button")
    button.innerText = "✖"
    button.addEventListener("click",deleteToDo)
    li.appendChild(span); //span읋 li의 자식이 되도록 함.
    li.appendChild(button);  //button을 li의 자식이 되도록 함.
    toDoList.appendChild(li); //!append는 맨 마지막에 추가하는 요소 중 하나!
}

function handleToDoSubmit(event){
    // 기본동작을 막는다
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);