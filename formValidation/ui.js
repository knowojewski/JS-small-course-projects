class UI {
    addUser(user) {
        const output = document.querySelector('.output');
        const line = document.createElement('ul');
        line.style.listStyle = 'none';

        line.innerHTML = `
                <li class="mb-1">User name: ${user.name}</li>
                <li class="mb-1">User Zipcode: ${user.zip}</li>
                <li class="mb-1">User email: ${user.email}</li>
                <li class="mb-1">User phone number: ${user.phone}</li>
                <li class="mb-1"><button class="btn btn-primary mb-3 btn-delete">Delete User</button></li>
        `;

        output.appendChild(line);
    }

    deleteUser(target) {
        target.parentElement.parentElement.remove();
    }

    showAlert(color, msg, text) {
        const div = document.createElement('div');
        div.className = `alert mt-3 ${color} ${text}`;
        div.appendChild(document.createTextNode(msg));

        const container = document.querySelector('#before-heading');
        const heading = document.querySelector('.heading');

        container.insertBefore(div, heading);

        setTimeout( () => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    clearFields() {
        document.getElementById('name').value = '';
        document.getElementById('zip').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
    }
}