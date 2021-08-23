// task 1
function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};


function Cat() {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
};


var barsik = new Cat('Барсик');

console.log(barsik.stroke().stroke().feed());



// task 2
var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};
console.log(initialObj);

function deepClone(value) {
    if (typeof value !== 'object' || value == null) {
        return value;
    }

    var result;

    if (Array.isArray(value)) {
        result = new Array(value.length);

        for (var i = 0; i < value.length; i++) {
            result[i] = deepClone(value[i]);
        }
    } else {
        result = {};

        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                result[key] = deepClone(value[key]);
            }
        }
    }

    return result;
}

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[0].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);


// task 3
var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var testObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello test');
    }
};

function deepEqual(value1, value2) {
    if (Array.isArray(value1) && Array.isArray(value2)) {
        if (value1.length !== value2.length) {
            return false;
        }

        for (var i = 0; i < value1.length; i++) {
            if (!deepEqual(value1[i], value2[i])) {
                return false;
            }
        } 

    } else if (typeof value1 === 'function' && typeof value1 === 'function') {   
        if (value1.toString() !== value2.toString()) {
             return false;
        }    

    } else if (value1 && value2 && typeof value1 === 'object' && typeof value2 === 'object' && !Array.isArray(value1) && !Array.isArray(value2)) {
        if (!deepEqual(Object.keys(value1), Object.keys(value2))) {
            return false;
        }
    
        for (var key in value1) {
            if (value1.hasOwnProperty(key)) {
                if (!deepEqual(value1[key], value2[key])) {
                    return false;
                }
            }
        }
        
    } else {
        return value1 === value2;
    }

    return true;
}

console.log( deepEqual(initialObj, testObj));
console.log( deepEqual(initialObj, initialObj));
