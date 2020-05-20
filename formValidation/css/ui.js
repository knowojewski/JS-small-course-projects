class UI {
    addUser(user) {
        const output = document.querySelector('.output');
        const line = document.createElement('ul');
        line.style.listStyle = 'none';
        line.className = 'd-flex flex-row';

        line.innerHTML = `
                <li class="mb-1 p-2"><h6 class="float-left mr-3">User name: </h6><span>${user.name}</span></li>
                <li class="mb-1 p-2"><h6 class="float-left mr-3">User Zipcode: </h6><span>${user.zip}</span></li>
                <li class="mb-1 p-2"><h6 class="float-left mr-3">User email: </h6><span>${user.email}</span></li>
                <li class="mb-1 p-2"><h6 class="float-left mr-3">User phone number: </h6><span>${user.phone}</span></li>
                <li class="mb-1 p-2"><button class="btn btn-primary mb-3 btn-delete">Delete User</button></li>
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