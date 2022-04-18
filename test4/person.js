class Person {
    constructor (name, city){
        this.name = name,
        this.city = city
    };

    greeting = () => {
        return `Hi my name is ${this.name} and i am from ${this.city}.`;
    }
};

module.exports = Person;