const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.googleBook
      .find(req.query)
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.googleBook
      .create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.googleBook
      .findById({ _id: req.params.id })
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
