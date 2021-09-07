// task 1


function filterNumbersArr(numbers) {

    var numbers = numbers.filter(function (number) {  
        return number > 0;
    });

    return console.log(numbers);
}

filterNumbersArr([-1, 0, 2, 34, -2]);




// task 2


function firstPositiveNumber(numbers) {
    var numbers = numbers.find(function (number) {
        return number > 0;
    });

    return console.log(numbers);
}

firstPositiveNumber([-1, 0, 2, 34, -2]);




// task 3
function palidromeCheck(word) {
   
    return console.log(word.toLowerCase().split('').reverse().join('') == word.toLowerCase());    
}

palidromeCheck('ШалаШ');
palidromeCheck('привет');



// task 4
function areAnagrams(word1, word2) {
    
    return console.log(word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join(''));   
}

areAnagrams('кот', 'Отк');
areAnagrams('кот', 'отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');




// task 5
var arr = [1, 2, 3, 4, 5, 6, 7, 8 ];
   

function divideArr(arr, amount) {

    var dividArr = [];

    for (var i = 0; i < arr.length; i++) {
        dividArr.push(arr.splice(i, amount));
         i--;
        }

        return console.log(dividArr);
    }
  
divideArr(arr, 3);
