const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.static(__dirname + '/public'));
app.use(express.json());

var corsOptions = {
    origin: "http://localhost:3001"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))

//connect server
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
require("./app/routes/account_routes.js")(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/pages/homepage.html');
});

app.get('/profile', function(req, res){
    res.sendFile(__dirname + '/pages/profile.html');
});

app.get('/register', function(req, res){
    res.sendFile(__dirname + '/pages/createAccount.html');
});

app.get('/animes', function(req, res){
    res.sendFile(__dirname + '/pages/exploreAnimeList.html');
});

app.get('/login', function(req, res){
    res.sendFile(__dirname + '/pages/login.html');
});

app.get('/winter2022', function(req, res){
    res.sendFile(__dirname + '/pages/winter2022.html');
});
app.get('/summer2022', function(req, res){
    res.sendFile(__dirname + '/pages/summer2022.html');
});
app.get('/spring2022', function(req, res){
    res.sendFile(__dirname + '/pages/spring2022.html');
});
app.get('/fall2022', function(req, res){
    res.sendFile(__dirname + '/pages/fall2022.html');
});

app.get('/trending-animes', function(req, res){
    res.sendFile(__dirname + '/pages/trendingAnimes.html');
});

app.get('/trending-comics', function(req, res){
    res.sendFile(__dirname + '/pages/trendingComics.html');
});

app.get('/comics', function(req, res){
    res.sendFile(__dirname + '/pages/exploreMangaList.html');
});

app.get("*", function(req, res){
    res.send("Webpage does not exist");
});


