const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizerIn) {
        this._courses.appetizers = appetizerIn;
    },
    set mains(mainsIn) {
        this._courses.appetizers = mainsIn;
    },
    set desserts(dessertsIn) {
        this._courses.appetizers = dessertsIn;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal: function () {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is ${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'wings', 5.25);
menu.addDishToCourse('appetizers', 'fries', 6.25);

menu.addDishToCourse('mains', 'steak', 10.25);
menu.addDishToCourse('mains', 'salmon', 8.25);
menu.addDishToCourse('mains', 'tofu', 7.25);

menu.addDishToCourse('desserts', 'ice cream', 2.75);
menu.addDishToCourse('desserts', 'coffe', 1.50);
menu.addDishToCourse('desserts', 'cake', 3.45);

let meal = menu.generateRandomMeal();
console.log(meal);