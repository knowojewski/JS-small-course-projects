class Storage {
    static getFromLocalStorage() {
        let users;

        if(localStorage.getItem('users') === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem('users'));
        }

        return users;
    }

    static displayFromLocalStorage() {
        const users = Storage.getFromLocalStorage()

        users.forEach(user => {
            const ui = new UI();

            ui.addUser(user);
        });
    }

    static addToLocalStorage(user) {
        const users = Storage.getFromLocalStorage()

        users.push(user);

        localStorage.setItem('users', JSON.stringify(users));
    }

    static deleteFromLocalStorage(target) {
        const users = Storage.getFromLocalStorage()
        
        users.forEach((user, index) => {
            if(target[0].lastChild.textContent === user.name && 
                target[1].lastChild.textContent === user.zip && 
                target[2].lastChild.textContent === user.email && 
            target[3].lastChild.textContent === user.phone) {

                users.splice(index, 1);
            } else {
                console.log('Something went wrong...');
            }
        });

        localStorage.setItem('users', JSON.stringify(users));
    }
}