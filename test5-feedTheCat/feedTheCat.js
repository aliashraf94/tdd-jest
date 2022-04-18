class Cat {
    constructor (name, color, foodBag){
        this.name = name,
        this.color = color,
        this.foodBag = foodBag
    }

    addFood(food){
        this.foodBag.push(food)
    }

};

module.exports = Cat;