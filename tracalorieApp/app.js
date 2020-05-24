// Storage Controller

// Item Controller
const ItemCtrl = (function() {
    // Item constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State
    const data = {
        items: [
            { id: 0, name: 'Steak Dinner', calorier: 1200 },
            { id: 1, name: 'Cookie', calorier: 400 },
            { id: 2, name: 'Eggs', calorier: 200 }
        ],
        currentItem: null,
        totalCalories: 0
    }


    // Public Methods
    return {
        logData: function() {
            return data;
        }
    }
})();




// UI Controller

const UICtrl = (function() {
    

    // Public methods
    return {

    }

})();



// App Controller

const App = (function(ItemCtrl, UICtrl) {
    

    // Public methods
    return {
        init: function() {
            console.log('Initializing App...');
        }
    }

})(ItemCtrl, UICtrl);

// Initialize app
App.init();