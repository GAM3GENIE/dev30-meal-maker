var menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],
    
        get appetizers() {
            return this._appetizers;
          },
          set appetizers(appetizersIn) {
            this._appetizers = appetizersIn;
          },
          get mains() {
            return this._mains;
          },
          set mains(mainsIn) {
            this._mains = mainsIn;
          },
          get desserts() {
            return this._desserts;
          },
          set desserts(dessertsIn) {
            this._desserts = dessertsIn;
          },
        },

        get courses() {
            return {
              appetizers: this._courses.appetizers,
              mains: this._courses.mains,
              desserts: this._courses.desserts,
            };
        },

    addDishToCourse: function(courseName, dishName, dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice,
          };
          
          this._courses[courseName].push(dish);  
    },

    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
      },
};

menu.addDishToCourse('appetizers', 'Ceasar Salad', 5.75);
menu.addDishToCourse('appetizers', 'Mozzeralla Sticks', 5.75);
menu.addDishToCourse('appetizers', 'Bacon Fries', 5.25);

menu.addDishToCourse('mains', 'Chicken Parm', 13.55);
menu.addDishToCourse('mains', 'Bacon Cheeseburger', 15.50);
menu.addDishToCourse('mains', 'Fish Tacos', 15.75);

menu.addDishToCourse('desserts', 'Cheese Cake', 6.35);
menu.addDishToCourse('desserts', 'Chocalate Cake', 6.45);
menu.addDishToCourse('desserts', 'Ice Cream', 2.75);

let meal = menu.generateRandomMeal();

console.log(meal);