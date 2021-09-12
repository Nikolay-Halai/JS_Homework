// practik

localStorage.clear();

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
    var firsLinks = newParagraph.children;

    for (var i = 0; i < firsLinks.length; i++) {
        firsLinks[i].classList.add('color');

    }
};

newParagraph2.onclick = function (event) {
    event.preventDefault();

    var target = event.target;

    if (target.tagName == 'A') {
        var value = localStorage.getItem(target.textContent);

        if (value) {
            alert(JSON.parse(value).path);
        } else {
            // target.getAttribute('href')
            localStorage.setItem(target.textContent, JSON.stringify({path: target.href}));
            // target.setAttribute('href', '#')
            target.href = '#';
            alert('сохранено');
        }
    }
};


// task 1

var form = document.getElementsByTagName('form');
    form = form[0];
var button = document.getElementById('button');
var inputX = document.getElementById('input-x');
var inputY = document.getElementById('input-y');

var x, 
    y;

inputX.addEventListener('keyup', function(event) {
    x = event.target.value;
    update();
});

inputY.addEventListener('keyup', function(event) {
    y = event.target.value;
    update();
});

function update() {
    if (x && y) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', null);
    }
}

button.addEventListener('click', function(event) {
    event.preventDefault();

    var amountX = +x;
    var amountY = +y;

    if ((amountX > 0 && amountX <= 10) && (amountY > 0 && amountY <= 10)) {
        var table = document.getElementById('table');

        if (table) {
            table.parentNode.removeChild(table);
        }

        document.body.appendChild(buildTable(amountX, amountY));
    
    } else {
        alert('Invalid input');
    }
});

function buildTable(x, y) {
    var table = document.createElement('table');

    table.id = 'table';
    table.classList.add('chess');
    table.addEventListener('click', function() {
        table.classList.toggle('chess-invert');
    });
    
    for (var i = 0; i < x; i++) {
        var row = document.createElement('tr');

        for (var j = 0; j < y; j++) {
            row.appendChild(document.createElement('td'));
        }

        table.appendChild(row);
    }

    return table;
}
