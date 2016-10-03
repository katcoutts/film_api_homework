var Films = require('../client/src/models/films')

var FilmApi = function(app){

  var films = new Films;

  // as a rule always have key value pairs in your APi response.
  app.get('/api/films', function(req, res){
    res.json({data: films});
  });

  // :id is a dynamic thing so we can vary what you get back depending what is passed in.
  app.get('/api/films/:id', function(req, res){
    var foundFilm = req.params.id;
    res.json({data: films[foundFilm]});
  });

  app.post('/api/films', function(req, res){
    // if we hadn't done the body-parser thing above we wouldn't have access to body below.
    films.push(req.body.film);
    res.json({data: films });
  });

  app.delete('/api/films/:id', function(req,res){
    var foundFilm = req.params.id;
    films.splice(foundFilm, 1);
    res.json({data: films});
  });


  app.put('/api/films/:id', function(req,res){
    films[req.params.id] = req.body.film;
    res.json({data: films});
  });


// create
  app.post('/api/films', function(req,res){
    var newFilm = (req.body.film);
    films.push(newFilm);
    res.json({data: films});
  });


}

module.exports = FilmApi;