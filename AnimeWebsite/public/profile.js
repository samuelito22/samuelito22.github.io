window.onload = function(){
    if(sessionStorage.getItem("logged_in") == 'true'){
        document.getElementById('login').innerHTML = '<a href="/profile" class="nav-link"><svg style="transform: scale(1.2);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg></i></a>';
    }else{
        document.getElementById('login').innerHTML = '<a href="/login" class="nav-link">Login</a>';
    }
    var create_ = document.getElementById('create');
    var logout_ = document.getElementById('logout');
    var delete_ = document.getElementById('delete');
    logout_.addEventListener('click', (e) =>{
        logout();
    })
    
    getdata('http://localhost:3000/api/account/information/'+sessionStorage.getItem('id'));
}
function logout(){
    sessionStorage.setItem("logged_in", 'false');
    sessionStorage.setItem("id", "null");
    location.replace("/");
}

async function postdata(url) {
    // Storing response
    
    let response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    response = await fetch('http://localhost:3000/api/account/createNote',{
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({username: data.username, name: data.name, password: data.password,notes:{title:'Myfirst', content:'Card'}})
    })
}

async function getdata(url) {
    // Storing response
    
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    let filled = false;
    let outputHTML = '';
    for(i = 0; i<data.notes.length;i++){
        if(data.notes[i].content != null){
            filled = true;
            outputHTML += '<div class = "col-md-4 col-6"><div class="card border-secondary mb-3" style="max-width: 18rem;"><div class="card-header">';
            if(data.notes[i].title != null)
            {
                outputHTML += data.notes[i].title;
            }
            outputHTML += '</div><div class="card-body text-secondary"><p class="card-text">'+data.notes[i].content+'</p></div></div></div>';            
        }
    }
    if(filled == false){
        document.getElementById('cards').innerHTML = '<h3 style="text-align: center;">No notes available</h3>';
    }else{
        document.getElementById('cards').innerHTML = outputHTML;
    }

    
}