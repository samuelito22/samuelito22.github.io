var messages = []
var notFoundAccount = false;
if(sessionStorage.getItem('logged_in') == 'true'){
    location.replace("/");
}
window.onload = function(){
    if(sessionStorage.getItem("logged_in") == 'true'){
        document.getElementById('login').innerHTML = '<a href="/profile" class="nav-link"><svg style="transform: scale(1.2);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg></i></a>';
    }else{
        document.getElementById('login').innerHTML = '<a href="/login" class="nav-link">Login</a>';
    }

    if(sessionStorage.getItem("logged_in") == 'true'){
        document.getElementById('login').innerHTML = '<a href="/login" class="nav-link"><svg style="transform: scale(1.2);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg></i></a>';
    }else{
        document.getElementById('login').innerHTML = '<a href="/login" class="nav-link">Login</a>';
    }
    var username = document.getElementById('username');
    var submit = document.getElementById('submit');
    var password = document.getElementById('password');
    var name = document.getElementById('name');
    var error = document.getElementById('error');

    submit.addEventListener('click', (e) =>{
        messages = []
        if(password.value === '' || password.value == null || username.value === '' || username.value == null || name.value === '' || name.value == null){
            messages.push("Please fill out the form")
        }else if(password.value > 18 || username.value > 15 || name.value>14){
            if(password.value > 18){
                messages.push("Password is too long")
            }else if(username.value > 15 ){
                messages.push("Username is too long")
            }else{
                messages.push("Name is too long")
            }
        }else if(password.value < 8 || username.value < 6 || name.value<1){
            if(password.value < 8){
                messages.push("Password must have more than 8 characters")
            }else if(username.value < 6 ){
                messages.push("Username must have more than 6 characters")
            }else{
                messages.push("Please input a real name")
            }
        }else{
            function hasNumber(string) {
                return /\d/.test(string);
            }

            check = hasNumber(name.value);
            if(check == true){
                messages.push("Name must not contain numbers")
            }
        }

        if(messages.length > 0){
            e.preventDefault()
            error.innerText = messages.join(', ')
        }else{
            e.preventDefault()
            getapi('http://localhost:3000/api/account/'+username.value);
        }
    })
    
}

async function getapi(url) {
    // Storing response
    
    let response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    validation(data);
    function validation(data){
        if(data.length == 1){
            messages.push("Username already exist")
        }else{
            notFoundAccount = true;
        }
    }
    if(notFoundAccount == true){
        response = await fetch('http://localhost:3000/api/account/',{
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({username: username.value, name: document.getElementById('name').value, password: password.value,notes:{title:"Hello", content:"It'sme"}})
        })
        data = await response.json();
        sessionStorage.setItem("logged_in", 'true');
        sessionStorage.setItem("id", data.id);
        location.replace("/");

    }else{
        error.innerText = messages.join(', ')
    }
}

