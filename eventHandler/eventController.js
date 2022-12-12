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

//ให้สร้างฟังก์ชัน addTodoHandler()เพื่อจัดการเมื่อผู้ใช้กดปุ่ม add  
//ให้ตรวจสอบว่าไม่เป็นค่า empty string จึงเพิ่มรายการ todoนั้นที่ todosarray 
//และให้แสดง todoภายใต้ <div id="listTodo"></div>  ของเอกสาร HTML 
//จากนั้นค้นหาปุ่ม Not Done และ   Remove ของ todoที่ add  เพื่อลงทะเบียน event 
//handler function notDoneButtonHandler() และremoveButtonHandler()ให้กับปุ่ม 
//Not Done และ   Remove
const addTodoHandler = () => {

  let inputField = document.getElementsByTagName('input')[0]
  if(inputField.value.trim()) {
    let id = addTodo(inputField.value)
    showTodoItem(id, inputField.value)
    let setDoneButton = document.getElementById(id).children[1]
    setDoneButton.addEventListener('click', notDoneButtonHandler)
    let removeButton = document.getElementById(id).children[2]
    removeButton.addEventListener('click', removeButtonHandler)
    updateStatus()
  }
}

const notDoneButtonHandler = ( event) => {
  let button = event.target
  button.textContent = 'Done'
  button.setAttribute('style', 'background-color: green; color: white;')
  setItemToDone(parseInt(button.parentNode.id))
  updateStatus()
}

const removeButtonHandler = () => {}

const updateStatus = () => {
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
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
