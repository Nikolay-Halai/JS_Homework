// task 1
var newArr = [];

function filterNumbersArr(numbers) {

    newArr = numbers.filter(function (number) {
        return number > 0;
    });

    return newArr;
}

filterNumbersArr([-1, 0, 2, 34, -2]);
console.log(newArr);



// task 2
var positiveNumber = [];

function firstPositiveNumber(numbers) {
    positiveNumber = numbers.find(function (number) {
        return number > 0;
    });

    return positiveNumber;
}

firstPositiveNumber([-1, 0, 2, 34, -2]);
console.log(positiveNumber);



// task 3
function palidromeCheck(word) {
    var wordRevers = word.split('').reverse().join('');

    if (wordRevers.toLowerCase() == word.toLowerCase()) {
        return console.log(true);

    } else {
        return console.log(false);
    }
}

palidromeCheck('ШалаШ');
palidromeCheck('привет');



// task 4
function areAnagrams(word1, word2) {
    var wordAnagram1 = word1.toLowerCase().split('').sort().join('');
    var wordAnagram2 = word2.toLowerCase().split('').sort().join('');

    if (wordAnagram1 === wordAnagram2) {
        return console.log(true);

    } else {
        return console.log(false);
    }
}
areAnagrams('кот', 'Отк');
areAnagrams('кот', 'отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');



// task 5
var arr = [1, 2, 3, 4, 5, 6, 7, 8 ],
    dividArr = [];

function divideArr(arr) {

    if (arr.length < 7) {
        for (var i = 0; i < arr.length; i++) {
            dividArr.push(arr.splice(0, 2));
            i--;
        }

    } else {
        for (var i = 0; i < arr.length; i++) {
            dividArr.push(arr.splice(0, 3));
            i--;
    }
        return dividArr;
    }
}    

divideArr(arr);
console.log(dividArr);