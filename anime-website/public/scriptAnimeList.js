var offset = 0;
var url = '';

function modal(id){
    url = 'https://kitsu.io/api/edge/anime/'+id;
    async function getapi(url) {
    
        // Storing response
        const response = await fetch(url);
        
        // Storing data in form of JSON
        var data = await response.json();
        let outputHTML = "";
        outputHTML += data.data.attributes.synopsis;
        document.getElementById('Synopsis').innerHTML = outputHTML;
        outputHTML = "";
        outputHTML += data.data.attributes.ageRatingGuide;
        document.getElementById('ageRating').innerHTML = outputHTML;
        outputHTML = '<iframe width="420" height="315" src="https://www.youtube.com/embed/';
        outputHTML += data.data.attributes.youtubeVideoId;
        outputHTML += '" style="box-shadow: 5px 10px 10px #888888;display: inline-block;"></iframe>'
        document.getElementById('Trailer').innerHTML = outputHTML;
        outputHTML = data.data.attributes.canonicalTitle;
        document.getElementById('ModalLongTitle').innerHTML = outputHTML;
    }
    getapi(url);
}

function pageDown(){
    if(offset != 0){
        offset -= 18;
        setUp('anime_set');
        window.scrollTo(0,0);
    }
}
function pageUp(){
    offset += 18;
    setUp('anime_set');
}

function popularity(){
    url = 'https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=18&page[offset]=';
    offset = 0;
    setUp('anime_set');
}
function ranking(){
    url = 'https://kitsu.io/api/edge/anime?sort=ratingRank&page[limit]=18&page[offset]=';
    offset = 0;
    setUp('anime_set');
}

function sortNew(){
    url = 'https://kitsu.io/api/edge/anime?sort=-startDate&page[limit]=18&page[offset]=';
    offset = 0;
    setUp('anime_set');
}

function season(name){
    url = 'https://kitsu.io/api/edge/anime?filter[season]='+name+'&sort=popularityRank&page[limit]=18&page[offset]=';
    offset = 0;
    setUp('anime_set');
}

function status_(name){
    url = 'https://kitsu.io/api/edge/anime?filter[status]='+name+'&sort=popularityRank&page[limit]=18&page[offset]=';
    offset = 0;
    setUp('anime_set');
}

function setUp(id){
    async function getapi(url, id) {
    
        // Storing response
        const response = await fetch(url);
        
        // Storing data in form of JSON
        var data = await response.json();
        if(data.data.length == 0){
            offset -= 18;
        }else{
            finishSetUp(data, id);
            window.scrollTo(0,0);
        }
    }
    getapi(url+offset, id);

    function finishSetUp(data, id){
        let outputHTML = "";
        for(i = 0; i<data.data.length; i++){
            outputHTML += "<div class = 'col-md-6 col-12'>";
            outputHTML += '<div class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div class="col-4">';
            outputHTML += '<img src="'+data.data[i].attributes.posterImage.small+'" class="img-fluid rounded-start"><div style = "position: absolute; background: rgba(0,0,0,.69); z-index: 2;top: 0px; left: 2px;color:white;">';
            let score = Number((data.data[i].attributes.averageRating))/10;
            score = score.toString();
            outputHTML += score.substring(0,3)+'/10'
            outputHTML += '</div></div><div class="col-8"><div class="card-body">';
            outputHTML += '<h5 class="card-title">'+data.data[i].attributes.canonicalTitle+'</h5><p class="card-text"><div class="box">'+data.data[i].attributes.synopsis+'</p><p class="read-more"><a onclick="modal('+data.data[i].id+');" class="button" style="color: red; text-decoration: none; cursor: pointer;" data-toggle="modal" data-target="#modal">-------Read More--------</a></p></div></div></div></div></div>';
            outputHTML += '</div>';
        }
        document.getElementById(id).innerHTML = outputHTML;
    }
}   

function bodyReady(url_){
    if(sessionStorage.getItem("logged_in") == 'true'){
        document.getElementById('login').innerHTML = '<a href="/profile" class="nav-link"><svg style="transform: scale(1.2);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg></i></a>';
    }else{
        document.getElementById('login').innerHTML = '<a href="/login" class="nav-link">Login</a>';
    }
    url = url_;
    setUp('anime_set');
}


