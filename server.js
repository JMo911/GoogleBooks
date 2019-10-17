const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config()
// const routes = require('./routes');
const db = require('./models');

 
mongoose.connect('mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// db.GoogleBook.create({ 
//   id: 1,
//   title: "test",
//   authors: ["test"],
//   description: "test",
//   image: "test",
//   link: "test"
//   })
//   .then(function(dbBook) {
//     console.log(dbBook);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });

// Define API routes here
// on click query this api https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
app.get('/scrape/:title', (req, res) => {
  // " + req.param.title + "
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title+ "&key=" + process.env.GOOGLE_API_KEY)
  .then(response => {
    const booksArray = response.data.items;
    const scrapedBooks = [];
    booksArray.forEach(element => {
      const Book = {
        title: element.volumeInfo.title,
        authors: element.volumeInfo.authors.join(", "),
        description: element.volumeInfo.description,
        image: element.volumeInfo.imageLinks.smallThumbnail,
        link: element.volumeInfo.infoLink,
      };
      scrapedBooks.push(Book);
    });
    res.send(scrapedBooks)
  }) 
  .catch(err => console.log(err)); 
})

app.post('/api/books', (req, res) => {
  const book = req.body;
  console.log(req.body);
  db.GoogleBook.create(book)
  .then(function(dbBook) {
    // console.log(dbBook);
    res.json(dbBook);
  })
  .catch(function(err) {
    console.log(err.message);
  });
});

app.get("/api/books", function(req, res) {
  // Find all Notes
  db.GoogleBook.find({})
    .then(function(dbBook) {
      res.json(dbBook);
    })
    .catch(function(err) {
      res.json(err);
    });
});


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
