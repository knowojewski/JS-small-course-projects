const list = document.querySelector('.list'); // ul selector
const addBtn = document.querySelector('.add-btn'); // button selector
const inputTask = document.querySelector('.task-inputnput'); // text input selector
const emptyList = document.querySelector('.empty-list'); // paragraph selector
let idNumber = 0;

// Popup selectors
const popup = document.querySelector('.popup');
const popupInput = document.querySelector('.popupInput');
const popupInfo = document.querySelector('.popupInfo');
const confirm = document.querySelector('.confirm');
const cancel = document.querySelector('.cancel');
let editedTodo;


// Load every listener
const loadEvents = () => {
    addBtn.addEventListener('click', addTask); // Button ADD listener

    list.addEventListener('click', toolsFunctions); // Ul list click listener for checking target

    cancel.addEventListener('click', closePopup); // close popup

    confirm.addEventListener('click', confirmEdit); // edit task event

    inputTask.addEventListener('keyup', enterCheck); // enter event
};


// Adding task 
const addTask = () => {
    if(inputTask.value !== '') {
        idNumber++;
        const listItem = document.createElement('li')

        listItem.className = 'list-item';
        listItem.setAttribute('id', `${idNumber}`);
        listItem.innerHTML = `<span class="list-item-span">${inputTask.value}</span>`;

        createTools(listItem);
        
        // listItem.innerHTML = `
        //     <span>${inputTask.value}</span>
        //     <button class="complete"><ion-icon name="checkmark-outline"></ion-icon></button>
        //     <button class="edit">EDIT</button>
        //     <button class="delete"><ion-icon name="close-outline"></ion-icon></button>
        // `;

        list.appendChild(listItem);

        inputTask.value = '';

        emptyList.style.display = 'none';
    } else {
        alert('Wpisz zadanie!');
    }
};

const createTools = listItem => {
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<ion-icon name="close-outline"></ion-icon>'

    listItem.appendChild(completeBtn);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
};

const toolsFunctions = e => {
    
    if(e.target.closest('button').className === 'complete') {
        e.target.closest('li').classList.toggle('completed');

    } else if(e.target.closest('button').className === 'edit') {
        let item = e.target.closest('li');
        editTask(item);

    } else if(e.target.closest('button').className === 'delete') {
        let item = e.target.closest('li');
        deleteTask(item);
    }
};

const editTask = (item) => {
    popupInfo.innerText = '';
    editedTodo = item;
    popupInput.value = editedTodo.firstChild.innerText;
    
    console.log(editedTodo);
    popup.style.display = 'flex';
};

const confirmEdit = () => {
    if (popupInput.value !== '') {
        editedTodo.firstChild.innerText = `${popupInput.value}`
        closePopup();
    } else {
        popupInfo.innerText = 'Pole nie może być puste!';
    }
};

const closePopup = () => { popup.style.display = 'none'; };

const deleteTask = (item) => { 
    item.remove(); 

    if (list.innerHTML === '') {
        emptyList.style.display = 'block';
    }
};

const enterCheck = () => {
    if (event.keyCode === 13) {
        addTask();
    }
};


document.addEventListener('DOMContentLoaded', loadEvents);

