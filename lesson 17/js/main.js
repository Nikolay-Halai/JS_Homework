// task 1
var mail = 'name_surname-1234@gmail.com';

/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{2,10}(-|.)?[a-z\d]{2,10}\.com$/i.test(mail);





// task 2

var tel = '8044-444-44-44';
// +375-25-777-77-77
// 375299999999
// 8-044-444-44-44
// 8033-6666666

var reg = /^(([\+]?375)-?|8-?0)(25|29|33|44|17)-?[1-9](\d{2}-?){2}\d{2}$/;


function chekTel(tel, reg) {
    console.log(reg.test(tel));
}

chekTel(tel, reg);



// task 3

var text = 'thght t wld b sr t std';


function count(text) {
    var result = text.match(/[aeiouyауоыиэяюёе]/gim);

    if (result === null) {
        console.log('number of vowels : 0');

    } else {
        console.log('number of vowels : ' + result.length);
    }
}

count(text);




// 2 option
var text = 'thght t wld b sr t std';

text = text.replace(/[^aeiouyауоыиэяюёе]/gim, '');
console.log('number of vowels : ' + text.length);
// как тут правильнее не знаю я бы наверное в функцию это завернул)) как мне кажется логичнее было)




// 3 option
// по этому метаду я не понял как перебрать получаймый обьект, ошибку выдает постоянно а ленгтх undefaind
var text = 'thghtaaAAaa t wld b sr t std';

function count(text) {
    var regexp = /[aeiouyауоыиэяюёе]/gim;
   
    text = text.matchAll(regexp);
    text = Array.from(text);

    console.log('number of vowels : ' + text.length);
}

count(text);