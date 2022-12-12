// import { todoManagement } from '../lib/todoManagement.js'
// import { todoUserInterface } from '../UI/todoList.js'
// const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
//   todoUserInterface()

// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
//   setItemToDone,
//   loadTodos
// } = todoManagement()

const todoManagement = require('../lib/todoManagement.js')
const todoList = require('../UI/todoList.js')

const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoList()
const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos
} = todoManagement()

const addTodoHandler = () => {
let input = document.getElementsByTagName('input')[0]
if( input.value.trim()){
  let id = addTodo( input.value)
  showTodoItem( id, input.value)

  let setDoneButton = document.getElementById(id).children[1]
  setDoneButton.addEventListener('click', notDoneButtonHandler)

  let removeButton = document.getElementById(id).children[2]
  removeButton.addEventListener('click', removeButtonHandler)

  updateStatus()
}

}

const notDoneButtonHandler = ( event ) => {
 let button = event.target
 button.textContent = 'Done'
 button.setAttribute('style','background - color: green; color: white' )
 setItemToDone( parseInt( button.parentNode.id))
 updateStatus()
}

const removeButtonHandler = ( event) => {
  let button = event.target
  removeTodoItem( button.parentNode.id)
  removeTodo(parseInt( button.parentNode.id))
  updateStatus()
 
}

const updateStatus = () => {
  showNumberOfDone( getNumberOfDone())
  showNumberOfNotDone( getNumberOfNotDone())
}



// export {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler,
// }

module.exports = {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler
}
