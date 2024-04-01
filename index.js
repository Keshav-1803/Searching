const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());

const books = [
  {
    name: "The Great Gatsby",
    description:
      "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    author: "F. Scott Fitzgerald",
    category: "Classic Fiction",
  },
  {
    name: "To Kill a Mockingbird",
    description:
      "A story of racial injustice and the loss of innocence in the American South.",
    author: "Harper Lee",
    category: "Classic Fiction",
  },
  {
    name: "1984",
    description:
      "A dystopian novel about a totalitarian regime and a man who dares to rebel against it.",
    author: "George Orwell",
    category: "Dystopian Fiction",
  },
  {
    name: "Pride and Prejudice",
    description:
      "A classic novel of love, manners, and misunderstanding in early 19th-century England.",
    author: "Jane Austen",
    category: "Classic Fiction",
  },
  {
    name: "The Catcher in the Rye",
    description:
      "A novel about a disillusioned teenager and his observations of the world around him.",
    author: "J.D. Salinger",
    category: "Modern Fiction",
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    description:
      "The first book in the Harry Potter series, following the adventures of a young wizard.",
    author: "J.K. Rowling",
    category: "Fantasy",
  },
  {
    name: "The Hobbit",
    description:
      "The story of Bilbo Baggins, a hobbit who embarks on an epic quest.",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
  },
  {
    name: "The Da Vinci Code",
    description:
      "A thriller about a symbologist and a cryptologist on a quest to unravel a secret society.",
    author: "Dan Brown",
    category: "Mystery",
  },
  {
    name: "Gone Girl",
    description:
      "A psychological thriller about a woman who goes missing and the mystery surrounding her disappearance.",
    author: "Gillian Flynn",
    category: "Mystery",
  },
  {
    name: "The Alchemist",
    description:
      "A philosophical novel about a young shepherd named Santiago on a journey to find treasure.",
    author: "Paulo Coelho",
    category: "Philosophical Fiction",
  },
  {
    name: "The Hunger Games",
    description:
      "A dystopian novel about a young woman who volunteers to take her sister's place in a brutal competition.",
    author: "Suzanne Collins",
    category: "Dystopian Fiction",
  },
  {
    name: "Lord of the Flies",
    description:
      "A novel about a group of boys stranded on an uninhabited island and their descent into savagery.",
    author: "William Golding",
    category: "Classic Fiction",
  },
  {
    name: "The Girl with the Dragon Tattoo",
    description:
      "A mystery thriller about a journalist and a hacker investigating a wealthy family's dark secrets.",
    author: "Stieg Larsson",
    category: "Mystery",
  },
  {
    name: "The Road",
    description:
      "A post-apocalyptic novel about a father and son's journey through a desolate landscape.",
    author: "Cormac McCarthy",
    category: "Dystopian Fiction",
  },
  {
    name: "Brave New World",
    description:
      "A dystopian novel about a future society where humans are genetically engineered and controlled.",
    author: "Aldous Huxley",
    category: "Dystopian Fiction",
  },
  {
    name: "Frankenstein",
    description:
      "A classic novel about a scientist who creates a grotesque creature in an unorthodox scientific experiment.",
    author: "Mary Shelley",
    category: "Classic Fiction",
  },
  {
    name: "The Picture of Dorian Gray",
    description:
      "A novel about a man who remains youthful while a portrait of him ages, reflecting his moral decay.",
    author: "Oscar Wilde",
    category: "Classic Fiction",
  },
  {
    name: "The Road Less Traveled",
    description:
      "A self-help book offering insights on personal growth and spiritual development.",
    author: "M. Scott Peck",
    category: "Self-Help",
  },
  {
    name: "Sapiens: A Brief History of Humankind",
    description:
      "A book exploring the history of Homo sapiens from the Stone Age to the modern era.",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
  },
  {
    name: "The Lean Startup",
    description:
      "A guide to creating successful startups through continuous innovation and validated learning.",
    author: "Eric Ries",
    category: "Business",
  },
];

const movies = [
  {
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    genre: "Drama",
  },
  {
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    genre: "Action",
  },
  {
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    genre: "Crime",
  },
  {
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    director: "Robert Zemeckis",
    genre: "Drama",
  },
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    genre: "Action",
  },
  {
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "Lana Wachowski, Lilly Wachowski",
    genre: "Action",
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
  },
  {
    title: "Gladiator",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    director: "Ridley Scott",
    genre: "Action",
  },
  {
    title: "Schindler's List",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    director: "Steven Spielberg",
    genre: "Drama",
  },
  {
    title: "The Silence of the Lambs",
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    director: "Jonathan Demme",
    genre: "Crime",
  },
  {
    title: "The Green Mile",
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    director: "Frank Darabont",
    genre: "Drama",
  },
  {
    title: "Saving Private Ryan",
    description:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    director: "Steven Spielberg",
    genre: "War",
  },
  {
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    director: "David Fincher",
    genre: "Drama",
  },
  {
    title: "The Departed",
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    director: "Martin Scorsese",
    genre: "Crime",
  },
  {
    title: "The Prestige",
    description:
      "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    director: "Christopher Nolan",
    genre: "Drama",
  },
  {
    title: "Inglourious Basterds",
    description:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    director: "Quentin Tarantino",
    genre: "War",
  },
  {
    title: "The Revenant",
    description:
      "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
    director: "Alejandro González Iñárritu",
    genre: "Adventure",
  },
  {
    title: "The Dark Knight Rises",
    description:
      "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
    director: "Christopher Nolan",
    genre: "Action",
  },
  {
    title: "The Wolf of Wall Street",
    description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    director: "Martin Scorsese",
    genre: "Biography",
  },
];

router.get("/:type", function (req, res) {
  const type = req.params.type;
  if (type == "books") {
    const bookName = req.query.name;
    if (bookName == null) {
      return res.send({Status : "OK", Books : books});
    } else {
      const filterd = books.filter((book) =>
        book.name.toLowerCase().includes(bookName.toLocaleLowerCase())
      );
      return res.send({Status : "OK", Results : filterd});
    }
  } else if (type == "movies") {
    const movieName = req.query.title;
    if(movieName == null){
      return res.send({Status : "OK", Movies : movies})
    }
    else{
      const filterdMov = movies.filter((movie) =>
      movie.title.toLowerCase().includes(movieName.toLocaleLowerCase())
      );
      return res.send({Status : "OK", Results : filterdMov});
    }
  }
});

app.use("/", router);

app.listen(8000, function () {
  console.log("Server Started at Port: ", 8000);
});
