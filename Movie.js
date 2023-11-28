class Movie {
  constructor(title,studio,rating){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  
  getMovies(movies){
    var pg = movies.filter((movie) => movie.rating === "PG-13")
    return pg.map((movie)=>movie.title);
  }
 
}
var Movie1 = new Movie("Casino Royale","Eon Productions","PG-13");
var Movie2 = new Movie("leo","Eon Productions","kl");
var Movie3 = new Movie("Harry potter","Eon Productions","PG-13");

var moviearray =[Movie1,Movie2,Movie3];

console.log(Movie2.getMovies(moviearray));


