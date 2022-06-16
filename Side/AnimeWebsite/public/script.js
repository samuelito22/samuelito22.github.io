function modalManga(id){
    url = 'https://kitsu.io/api/edge/manga/'+id;

    async function getapi(url, id) {
    
        // Storing response
        const response = await fetch(url);
        
        // Storing data in form of JSON
        var data = await response.json();
        let outputHTML = "";
        outputHTML += data.data.attributes.synopsis;
        document.getElementById('SynopsisManga').innerHTML = outputHTML;
        outputHTML = data.data.attributes.canonicalTitle;
        document.getElementById('ModalLongTitleManga').innerHTML = outputHTML;
    }
    getapi(url);
}
function modalAnime(id){
    url = 'https://kitsu.io/api/edge/anime/'+id;
    async function getapi(url) {
    
        // Storing response
        const response = await fetch(url);
        
        // Storing data in form of JSON
        var data = await response.json();
        let outputHTML = "";
        outputHTML += data.data.attributes.synopsis;
        document.getElementById('SynopsisAnime').innerHTML = outputHTML;
        outputHTML = "";
        outputHTML += data.data.attributes.ageRatingGuide;
        document.getElementById('ageRatingAnime').innerHTML = outputHTML;
        outputHTML = '<iframe width="420" height="315" src="https://www.youtube.com/embed/';
        outputHTML += data.data.attributes.youtubeVideoId;
        outputHTML += '" style="box-shadow: 5px 10px 10px #888888;display: inline-block;"></iframe>'
        document.getElementById('TrailerAnime').innerHTML = outputHTML;
        outputHTML = data.data.attributes.canonicalTitle;
        document.getElementById('ModalLongTitleAnime').innerHTML = outputHTML;
    }
    getapi(url);
}

function setUpTrend(id){
    async function getapi(url, id) {
    
        // Storing response
        const response = await fetch(url);
        
        // Storing data in form of JSON
        var data = await response.json();
        finishSetUp(data, id);
    }
    if(id == "comic_set"){
        getapi('https://kitsu.io/api/edge/trending/manga', id);
    }else if(id == "anime_set"){
        getapi('https://kitsu.io/api/edge/trending/anime', id);
    }else if(id == 'anime_set_spring'){
        getapi('https://kitsu.io/api/edge/anime?filter[seasonYear]=2022&filter[season]=spring', id);
    }else if(id == 'anime_set_summer'){
        getapi('https://kitsu.io/api/edge/anime?filter[seasonYear]=2022&filter[season]=summer', id);
    }else if(id == 'anime_set_fall'){
        getapi('https://kitsu.io/api/edge/anime?filter[seasonYear]=2022&filter[season]=fall',id);
    }else{
        getapi('https://kitsu.io/api/edge/anime?filter[seasonYear]=2022&filter[season]=winter',id);
    }

    function finishSetUp(data, id){
        let outputHTML = "";
        for(i = 0; i<6; i++){
            outputHTML += "<div class = 'col-md-6 col-12'>";
            outputHTML += '<div class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div class="col-4">';
            outputHTML += '<img src="'+data.data[i].attributes.posterImage.small+'" class="img-fluid rounded-start"><div style = "position: absolute; background: rgba(0,0,0,.69); z-index: 2;top: 0px; left: 2px;color:white;">';
            let score = Number((data.data[i].attributes.averageRating))/10;
            score = score.toString();
            outputHTML += score.substring(0,3)+'/10'
            outputHTML += '</div></div><div class="col-8"><div class="card-body">';
            if(id=="anime_set"){
                outputHTML += '<h5 class="card-title">'+data.data[i].attributes.canonicalTitle+'</h5><p class="card-text"><div class="box">'+data.data[i].attributes.synopsis+'</p><p class="read-more"><a onclick="modalAnime('+data.data[i].id+');" class="button" style="color: red; text-decoration: none; cursor: pointer;" data-toggle="modal" data-target="#modalAnime">-------Read More--------</a></p></div></div></div></div></div>';
            }else{
                outputHTML += '<h5 class="card-title">'+data.data[i].attributes.canonicalTitle+'</h5><p class="card-text"><div class="box">'+data.data[i].attributes.synopsis+'</p><p class="read-more"><a onclick="modalManga('+data.data[i].id+');" class="button" style="color: red; text-decoration: none; cursor: pointer;" data-toggle="modal" data-target="#modalManga">-------Read More--------</a></p></div></div></div></div></div>';
            }
            outputHTML += '</div>';
        }
        document.getElementById(id).innerHTML = outputHTML;
    }
}   

window.onload = function() {
    if(sessionStorage.getItem("logged_in") == 'true'){
        document.getElementById('login').innerHTML = '<a href="/profile" class="nav-link"><svg style="transform: scale(1.2);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg></i></a>';
    }else{
        document.getElementById('login').innerHTML = '<a href="/login" class="nav-link">Login</a>';
    }
    setUpTrend('comic_set');
    setUpTrend('anime_set');
    setUpTrend('anime_set_spring');
    setUpTrend('anime_set_summer');
    setUpTrend('anime_set_winter');
    setUpTrend('anime_set_fall');
}