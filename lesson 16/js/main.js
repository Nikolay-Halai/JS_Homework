var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    if (localStorage.getItem('users')) {
        createTab(JSON.parse(localStorage.getItem('users')));
    } else {
        dataReqest();
    }
});

function dataReqest() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2');
    // xhr.open("GET", "https://httpstat.us/0");      
    xhr.send();

    xhr.onload = function () {
        var statusType = Math.round(this.status / 100);

        if (statusType === 2) {
            var person = JSON.parse(this.response).data;
            localStorage.setItem('users', JSON.stringify(person));
            createTab(person);

        } else {
            alert('Ошибка: ' + this.status + this.statusText);
        }
    };

    xhr.onerror = function () {
        alert('Ошибка: ' + this.status + this.statusText);
    };
}

function createTab(arr) {
    var tabs = document.getElementById('tabs');

    for (var i = 1; i < arr.length + 1; i++) {

        tabs.innerHTML += '<div class = "tab">' + 'User: ' + i + '</div>';
        tabs.firstChild.classList.add('activeBtn');
    }

    for (var j = 0; j < arr.length; j++) {

        tabs.innerHTML += '<div class = "content">' +
            '<img src=" ' + arr[j].avatar + '"></img>' +
            '<p>' +
            'First Name: ' + arr[j].first_name + '<br>' +
            'Last Name: ' + arr[j].last_name +
            '</p>' + '</div>';
    }

    hideTabsContent(1);
}

var tabBtn = document.getElementsByClassName('tab');
var content = document.getElementsByClassName('content');


function hideTabsContent(hide) {
    for (var i = hide; i < content.length; i++) {

        content[i].classList.remove('shove');
        content[i].classList.add('hide');
        tabBtn[i].classList.remove('activeBtn');
    }
}


tabs.onclick = function (event) {
    var target = event.target;

    if (target.className == 'tab') {
        for (var i = 0; i < tabBtn.length; i++) {

            if (target == tabBtn[i]) {
                showContent(i);
                break;
            }
        }
    }
};

function showContent(show) {
    if (content[show].classList.contains('hide')) {

        hideTabsContent(0);
        tabBtn[show].classList.add('activeBtn');
        content[show].classList.remove('hide');
        content[show].classList.add('show');
    }
}