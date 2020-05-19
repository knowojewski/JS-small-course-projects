// -------- EVENT LISTENERS -----------

// Validation from validation.js
// document.getElementById('name').addEventListener('blur', validateName);
// document.getElementById('zip').addEventListener('blur', validateZip);
// document.getElementById('email').addEventListener('blur', validateEmail);
// document.getElementById('phone').addEventListener('blur', validatePhone);

document.getElementById('form').addEventListener('submit', addUser);
document.querySelector('.output').addEventListener('click', deleteUser);

//---------- INSTANCES ------------

const ui = new UI();

//---------- FUNCTIONS ------------

// Add user
function addUser(e) {
    const name = document.getElementById('name').value;
    const zip = document.getElementById('zip').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    const user = new User(name, zip, email, phone);

    ui.addUser(user);
    ui.clearFields();
    ui.showAlert('bg-success', 'You successfully added user!', 'text-white');

    e.preventDefault();
}

function deleteUser(e) {
    if (e.target.classList.contains('btn-delete')) {
        ui.deleteUser(e.target);
        ui.showAlert('bg-danger', 'You successfully deleted user!', 'text-white');
    }
}