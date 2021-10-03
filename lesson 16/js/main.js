var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
   

     if (localStorage.getItem('users')) {
        createTab(JSON.parse(localStorage.getItem('users')));
    } else  {
        
        dataReqest();
    }
});

function dataReqest() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2');
    // xhr.open("GET", "https://httpstat.us/500");
          
    xhr.send();

    xhr.onload = function () {
        var statusType = Math.round(this.status / 100);

        if (statusType === 2) {
            var person = JSON.parse(this.response).data;
            localStorage.setItem('users', JSON.stringify(person));
            createTab(person);

        } else {
          
            errorModal();
        }
    };

    xhr.onerror = function () {
        errorModal();
    };
}


function errorModal () {
    var body = document.getElementsByTagName('body');
    body = body[0];

    var shadow = document.createElement('div'); 
    shadow.id = 'shadow';

    body.appendChild(shadow);
   
    var errorModal = document.createElement('div');
    errorModal.id = 'errorModal';

    errorModal.innerHTML = '<p>Sorry...<br> Something went wrong, please try to come back later or reload the page</p>' +
                            '<button class = "errorBtn">ok</button>';
    
    body.appendChild(errorModal);   
    
    var errorBtn = errorModal.getElementsByClassName('errorBtn');
    errorBtn = errorBtn[0];

    errorBtn.onclick = function() {
        shadow.remove();
        errorModal.remove();
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

    btn.setAttribute("disabled", true);
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

