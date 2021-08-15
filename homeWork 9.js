 function Animal(name) {
    var self = this;
    self._foodAmount = 0;
    this._name = name;

    this._dailyNorm = function(amount) {
        if (!arguments.length) return self._foodAmount;

        if ( amount < 50 ) {
            throw new Error('Не мори кота голодом, сволочь, насыпь корм!');
        }  
        
        if ( amount > 500) {
            throw new Error('ты чего так много сыпешь, кот разжиреет и не сможет ходить((');
        }
  
        self._foodAmount = amount;   
    };    

    function formatFoodAmount() {
        return self._foodAmount + ' гр.';
    }
    
    this._feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount(self._foodAmount) + ' корма.');
    };
}


function Cat(name) {
    Animal.apply(this, arguments);
    
    var animalFeed = this._feed;
    this._feed = function() {
        
        animalFeed();
        console.log(' Кот доволен ^_^"');
        this.stroke();
    }

    this.stroke = function() {
        console.log('"Гладим кота.".');
    }  
}


var barsik = new Cat('barsic');

barsik._dailyNorm(300);
barsik._feed();
barsik.stroke();
