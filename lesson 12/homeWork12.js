// task 1

var arr = ['Maria', 'Andre', 'Bob', 'Alex'],
    Names = [];


function getNames (arr) {

    Names = arr.map(function (value) { 
         return {name: value}; 
        });

        return Names;
}

getNames(arr);
console.log(Names);




// task 2

var time =  ['00', '13', '24'];
   
function showTime(arr) {
   
     var strTime = arr.reduce(function(str, curent ) {
         return  str + ' : ' + curent ;         
     });
    
     console.log('Текущее время : ' + strTime);
}

showTime(time);



// task 3

var text = 'I thought it would be easier to study';

function countVerbs(sentence) {
    var arrLetters = sentence.toLowerCase().split('');
 
    var lettersFilter = arrLetters.filter(function (item) {
        return 'aeiouy'.indexOf(item) !== -1;
      });
 
      console.log('number of vowels : ' + lettersFilter.length);
}

(countVerbs(text));




// task 4

var text = 'Привет, студент! Студент... Как дела, студент?';

function countSentencesLetters(text) {   
    var delPunctuation = text.split(/[\.?!]/g);
    
    delPunctuation = delPunctuation.filter(function (item) {
        return item != '';
      });

    delPunctuation.forEach(function(item) {
        console.log(item + ': ' + 'Letters quantity is: ' + item.split(/[\s\,]/).join('').length);
      });
}

countSentencesLetters(text);