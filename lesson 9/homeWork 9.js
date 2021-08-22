 function Animal(name) {
    
    var self = this;
     
    var foodAmount = 300;
    this.name = name;

    this.dailyNorm = function(amount) {
        if (!arguments.length) {
            return formatFoodAmount();
        }

        if ( amount < 50 ) {
            throw new Error('Не мори кота голодом, сволочь, насыпь корм!');
        }  
        
        if ( amount > 500) {
            throw new Error('ты чего так много сыпешь, кот разжиреет и не сможет ходить((');   
        }
  
        return foodAmount = amount;   
    };    

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }
    
    this.feed = function() {
     
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}


function Cat(name) {
    Animal.apply(this, arguments);
    
    var animalFeed = this.feed;
    this.feed = function() {
        
        animalFeed();
        console.log(' Кот доволен ^_^"');
        this.stroke();
        return this;     
    };

    this.stroke = function() {
        console.log('"Гладим кота.".');      
        return this;
    };    
}


var barsik = new Cat('barsic');

barsik.feed().stroke().stroke().feed();


function CoffeeMachine(power) {
    this._waterAmount = 0; 
    this._WATER_HEAT_CAPACITY = 4200;
    this._power = power;
}
    
CoffeeMachine.prototype._getTimeToBoil = function() {
    return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
};
  
CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
    alert( 'Кофе готов!' );
    }, this._getTimeToBoil());
};

          
CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this._waterAmount = amount;
};
  
  
  
  var coffeeMachine = new CoffeeMachine(10000);
  coffeeMachine.setWaterAmount(50);
  coffeeMachine.run();