// 2. A school's film club wants to store details of the films it has studied so far this year. Create a new class to do this. We want to store the following data about each film: id, title, director, releaseYear, and genres.
// Create two methods in the class: one for adding multiple genres to the films - addGenre(genre) - and one to get the title of the film - getFilmTitle().
// Instantiate a new instance of the class using data from your favorite film. Add at least 1 genre to your film using addGenre(), and get the title using getFilmTitle()

class Film {
  constructor(id, title, director, releaseYear, genres = []) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.genres = genres;
  }
  addGenre(genre) {
    this.genres = [...this.genres, genre];
  }
  getFilmTitle() {
    return `Title: ${this.title}`;
  }
}

class FavouriteFilm extends Film {
  constructor(id, title, director, releaseYear, genres = []) {
    super(id, title, director, releaseYear, (genres = []));
  }
}

const myfavouritefilm = new FavouriteFilm(
  1,
  "John Wick",
  "Chad Stahelski, David Leitch",
  2014
);
myfavouritefilm.addGenre("Action");
console.log(myfavouritefilm);
console.log(myfavouritefilm.title);
