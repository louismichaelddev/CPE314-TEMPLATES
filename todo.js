window.onload = loadTasks;

function addTask() {

    let input = document.getElementById("task");
    let text = input.value.trim();

    if (text === "") {
        return;
    }

    createTask(text);
    saveTask(text);

    input.value = "";
}

function createTask(text) {

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = text;

    span.onclick = function () {
        li.classList.toggle("completed");
    };

    let button = document.createElement("button");
    button.textContent = "Delete";
    button.className = "delete";

    button.onclick = function () {
        li.remove();
        deleteTask(text);
    };

    li.appendChild(span);
    li.appendChild(button);

    document.getElementById("list").appendChild(li);
}

function saveTask(task) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task) {
        createTask(task);
    });
}

function deleteTask(task) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(function (item) {
        return item !== task;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
