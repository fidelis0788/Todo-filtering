 // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
 let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}
]
let myListElement = document.querySelector('ol')
const fetchTodos = () => {
 fetch('https://jsonplaceholder.typicode.com/todos')
.then( (response) => response.json())
.then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  console.log('myListElement',myListElement)
  console.log("arrayOfTodos",arrayOfTodos)

  for (let index =0; index< arrayOfTodos.length; index++){
    const element = arrayOfTodos[index];
    var listItem = document.createElement('li')
    listItem.innerText = element.title + " " + element.userId
    myListElement.appendChild(listItem)
  }
  var data = ['myListElement'];
  if (data = 'false'){
    document.getElementById("todo-list").style.color = "#ff0000";
    }
    function check(UserId){
  return userId
 }
 function myFunction() {
  document.getElementById("input").innerHTML = userId;
}
}
function myFunction() {
  document. getElementById("resetbtn"). reset();
  }