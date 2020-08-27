
 var firebaseConfig = {
    apiKey: "AIzaSyCfNT7iw4odJ44w_nr6tAIdbpP8ufENebU",
    authDomain: "todo-list-8791e.firebaseapp.com",
    databaseURL: "https://todo-list-8791e.firebaseio.com",
    projectId: "todo-list-8791e",
    storageBucket: "todo-list-8791e.appspot.com",
    messagingSenderId: "880128655005",
    appId: "1:880128655005:web:fa85d03bb1285308901e74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db=firebase.firestore();
 



// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//EventListeners
todoButton.addEventListener("click",(e)=>addTodo(e));
todoInput.addEventListener("input",(e)=>toggleButton(e));
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
todoButton.disabled = true;
function toggleButton(e){
    if (todoInput.value.length == 0) {
       todoButton.disabled = true;
    } else {
        todoButton.disabled = false;
    } 
}

function addTodo(event) {
event.preventDefault();
//Start of Firebase
var task = todoInput.value;
db.collection('List of Todo').add({
    'task-name':task
}).then(res=>swal("Task added")).catch(error=>sweetAlert(error));
//End of Firebase

//alert('Task added')

  const todoDiv = document.createElement("div"); 
  todoDiv.classList.add("todo");
        
        //create new LI 
        
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item"); 
        todoDiv.appendChild(newTodo);
        
        //check mark button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        
        //check trash button
        const trashdButton = document.createElement("button");
        trashdButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashdButton.classList.add("trash-btn");
        todoDiv.appendChild(trashdButton);
        //Apend to List
        todoList.appendChild(todoDiv);
        //clear the input
        todoInput.value=""; 
        todoButton.disabled = true;
      }
    
   
function deleteCheck(e) {
    event.preventDefault();
   const item = e.target;
    //Delete TODO 
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");                         
        todo.addEventListener("transitionend", function() {
        todo.remove();
        });
    }

    //check mark
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
function filterTodo(e) {
    const todos = todoList.childNodes;
    // console.log(todos);
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
            break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.dispslay = "flex";
                } else {
                    todo.style.dispaly = "none";
                }
        }
    });
}



//Start of firebase code
// document.getElementById('todolist-form'). addEventListener('submit', saveList);
// function saveList(e) {
// 	e.preventDefault();
//     var list=document.getElementById('item').value;
//     console.log('hi');

// 	saveName(list);
// 	// console.log(myInput('subject'));
// }
// function saveName(a) {
// db.collection('List of Todo').doc().set({
// 	list:a,
	
// })

// .then(function (){console.log('Contact Saved');})
// .catch(function (error){console.log('Failed Contact');})
// }


// End of start of contact form 

