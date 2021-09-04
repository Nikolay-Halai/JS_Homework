var blocks = document.getElementById('block');

var newParagraph = document.createElement('p');
var newParagraph2 = document.createElement('p');

newParagraph.innerHTML = 'Hello. here are <a href = "https://www.google.by">link1</a> and <a href = "https://www.google.by">link2</a>';
newParagraph2.innerHTML = 'Hello. here are <a href = "https://www.google.by">link3</a> and <a href = "https://www.google.by">link4</a>';

blocks.appendChild(newParagraph);
blocks.appendChild(newParagraph2);

var button = document.getElementsByTagName('button');
button = button[0];

button.onclick = function (EO) {
    var links = newParagraph.children;

    for (var i = 0; i < links.length; i++) {
        links[i].classList.add('color');

    }
};

newParagraph2.onclick = function (event) {
    event.preventDefault();

    var target = event.target;

    if (target.tagName == 'A') {
        alert(target);
    }
};




// table

var trBtn = document.getElementById('btn'),
    table = document.getElementsByTagName('tbody');
table = table[0];

trBtn.onclick = function (EO) {
    event.stopImmediatePropagation();

    var tr = table.getElementsByTagName('tr'),
        tr = tr[0];

    newStrok = document.createElement('tr');
    newStrok.innerHTML = '<td></td> <td></td> <td></td>';

    table.insertBefore(newStrok, tr);
};

function addInput(teg) {
    var input = document.createElement('input');
    input.type = 'text';
    teg.appendChild(input);
    input.focus();
}

table.onclick = function (event) {
    var target = event.target;

    if (target.tagName == 'TD') {
        addInput(target);
    }
};

table.onkeydown = function (event) {
    var target = event.target;

    if (target.tagName == 'INPUT') {
        event.code === 'Enter' && target.blur();
    }
};