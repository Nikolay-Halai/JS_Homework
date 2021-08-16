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
     
        console.log('Насыпаем в миску ' + self.dailyNorm(foodAmount) + ' корма.');
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

