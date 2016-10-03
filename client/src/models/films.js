var Film = require('./film');
var Review = require('./review');

var Films = function(){

  var review1 = new Review({
    comment: "It's not even a thing. What just happened. I want my life back.",
    rating: 1,
    author: "Val"
  });

  var review2 = new Review({
    comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
    rating: 100,
    author: "Val"
  });  

  var review3 = new Review({
    comment: "An exciting romp through space with some colourful characters.",
    rating: 100,
    author: "Simon"
  });

  var film1 = new Film({
    title: "Now You See Me",
    actors: ["Woody Harrelson", "Jesse Eisenberg"],
    genre: "Magical rubbish"
  });

  var film2 = new Film({
    title: "Star Wars Episode IV: A New Hope",
    actors: ["Harrison Ford", "Alec Guiness"],
    genre: "Sci-fi splendidnous"
  });

  film1.addReview(review1);
  film2.addReview(review2);
  film2.addReview(review3);

  return [film1, film2];
}

module.exports = Films;