const submitButton = document.querySelector(".submit-button")
const newListButton = document.querySelector(".new-list-submit-button")

submitButton.addEventListener("click", createTask)
newListButton.addEventListener("click", createList)

function eventHandler(event) {
  event.preventDefault()
  console.log(event)
}

function createTask(event) {
  event.preventDefault()

  const form = event.target.parentNode
  const description = form.querySelector("#new-task-description").value
  const listName = form.querySelector(".list-select").value

  addTask({
    description: description
  }, listName)
}

function addTask(task, listName) {
  const list = document.getElementById(listName);
  // debugger
  const button = document.createElement("button");
  const li = document.createElement("li");
  button.className = "delete";
  li.innerText = task.description;
  li.append(button);
  list.append(li);
  const deleteButton = document.querySelector(".delete");
  deleteButton.addEventListener("click", deleteTask);
}

function createList(event) {
  event.preventDefault();

  const mainContent = document.querySelector('#main-content')
  const todoLists = document.querySelector('.list-select');
  const newListName = document.querySelector('#new-list-name').value
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");
  const option = document.createElement("option");

  option.value = newListName;
  option.innerText = newListName;
  todoLists.append(option);
  h2.innerText = newListName;
  ul.id = newListName;
  div.append(h2, ul);
  div.className = "list"
  mainContent.append(div)
}

function deleteTask(event) {
  event.preventDefault();
  event.target.parentNode.remove();
}
