var messages = []
var foundAccount = false;
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
    var error = document.getElementById('error');

    submit.addEventListener('click', (e) =>{
        e.preventDefault()
        messages = []
        if(password.value === '' || password.value == null){
            messages.push("Password is required")
        }

        if(username.value === '' || username.value == null){
            messages.push("Username is required")
        }
    
        if(messages.length > 0){
            
            error.innerText = messages.join(', ')
        }else{
            
            getapi('http://localhost:3000/api/account/'+username.value);
        }
    })
    
}

async function getapi(url) {
    // Storing response
    
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    validation(data);
    function validation(data){
        if(data.length == 1){
            if(data[0].password == password.value){
                foundAccount = true;
                messages = [];
                sessionStorage.setItem("logged_in", 'true');
                sessionStorage.setItem("id", data[0].id);
                location.replace("/");
            }else{
                messages.push("Password is incorrect")
            }
        }else{
            messages.push("Username does not exist")
        }
    }
    error.innerText = messages.join(', ')
    
}

