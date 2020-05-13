// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();
//displayTasks();

// Load all event listeners
function loadEventListeners() {
    // DOM Load event
    document.addEventListener('DOMContentLoaded', loadTasks);

    // Add task event
    form.addEventListener('submit', addTask);

    // Remove task
    taskList.addEventListener('click', removeTask);

    // Clear task list
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks
    filter.addEventListener('keyup', filterTasks);
}

// Load tasks from LS
function loadTasks() {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append link to the li
        li.appendChild(link);

        // Append li to the ul
        taskList.appendChild(li);
    });
}

// Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    } else {
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append link to the li
        li.appendChild(link);

        // Append li to the ul
        taskList.appendChild(li);

        // Store in local storage
        storeTaskInLocalStorage(taskInput.value);

        // Clear input
        taskInput.value = '';

        alert('Task added');
    }

    e.preventDefault();
}

// Store task in LS
function storeTaskInLocalStorage(task) {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Display task from LS
function displayTasks() {

}

// Remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Do you want to delete this task?')) {
            e.target.parentElement.parentElement.remove();

            // Remove from ls
            removeFromLocalStorage(e.target.parentElement.parentElement);
        }
        
    }
}

// Remove task from LS
function removeFromLocalStorage(task) {
    let tasks;

    console.log(task.firstChild.textContent);

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(item, index){
        console.log(item, index);
        if(item === task.firstChild.textContent) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear tasks
function clearTasks() {
    // taskList.innerHTML = '';

    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    clearTasksFromLocalStorage();

}

// Clear tasks from LS
function clearTasksFromLocalStorage() {
    localStorage.removeItem('tasks');
}

// Filter tasks
function filterTasks(e) {
    const search = filter.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(search) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}