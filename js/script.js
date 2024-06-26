$(document).ready(function () {
  $("#search-form").submit(function (event) {
    event.preventDefault();
    var searchTerm = $("#search-input").val().toLowerCase();
    var genre = $("#genre-select").val().toLowerCase();
    var year = $("#year-select").val();

    var movies = [
      {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        image: "/img/The Shawshank Redemption.jpg",
      },
      {
        id: 2,
        title: "The Godfather",
        year: 1972,
        genre: "Crime",
        image: "/img/The Godfather.jpg",
      },
      {
        id: 3,
        title: "The Godfather: Part II",
        year: 1974,
        genre: "Crime",
        image: "/img/The Godfather 2.jpg",
      },
      {
        id: 4,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        image: "/img/The Dark Knight.jpg",
      },
      {
        id: 23,
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Action",
        image: "/img/Avengers Endgame.jpg",
      },
      {
        id: 24,
        title: "Parasite",
        year: 2019,
        genre: "Drama",
        image: "/img/Parasite.jpg",
      },
      {
        id: 25,
        title: "Joker",
        year: 2019,
        genre: "Crime",
        image: "/img/Joker.jpg",
      },
      {
        id: 26,
        title: "1917",
        year: 2019,
        genre: "War",
        image: "/img/1917.jpg",
      },
      {
        id: 27,
        title: "Once Upon a Time in Hollywood",
        year: 2019,
        genre: "Comedy",
        image: "/img/OUAT.jpg",
      },
      {
        id: 28,
        title: "Knives Out",
        year: 2019,
        genre: "Mystery",
        image: "/img/Knives Out.jpg",
      },
      {
        id: 29,
        title: "Ford v Ferrari",
        year: 2019,
        genre: "Biography",
        image: "/img/Ford vs Ferrari.png",
      },
      {
        id: 30,
        title: "The Irishman",
        year: 2019,
        genre: "Biography",
        image: "/img/The irishman.jpg",
      },
      {
        id: 31,
        title: "Jojo Rabbit",
        year: 2019,
        genre: "Comedy",
        image: "/img/Jojo Rabbit.jpg",
      },
      {
        id: 32,
        title: "Little Women",
        year: 2019,
        genre: "Drama",
        image: "/img/Little Women.jpg",
      },
    ];

    var filteredMovies = movies.filter(function (movie) {
      var titleMatch = movie.title.toLowerCase().includes(searchTerm);
      var genreMatch = genre === "" || movie.genre.toLowerCase() === genre;
      var yearMatch = year === "" || movie.year.toString() === year;
      return titleMatch && genreMatch && yearMatch;
    });

    displayMovieList(filteredMovies);
  });

  function displayMovieList(movies) {
    var movieListHtml = "";
    if (movies.length > 0) {
      $.each(movies, function (index, movie) {
        movieListHtml += '<div class="col-md-4 movie">';
        movieListHtml +=
          '<img src="' +
          movie.image +
          '" class="img-fluid mb-2" alt="' +
          movie.title +
          '">';
        movieListHtml += "<h3>" + movie.title + "</h3>";
        movieListHtml += "<p>Genre: " + movie.genre + "</p>";
        movieListHtml += "<p>Year: " + movie.year + "</p>";
        movieListHtml += "</div>";
      });
    } else {
      movieListHtml =
        '<p class="text-warning">No movies found matching your criteria.</p>';
    }
    $("#movie-list").html(movieListHtml);
  }
});
