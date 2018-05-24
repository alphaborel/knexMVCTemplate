const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('books').then((results) => {
      res.render('index', {
        results: results
      })
    })
  },

  addbook: function(req, res) {
    res.render("newBook");
  },

  addbookdb: function(req, res){
    knex('books').insert({title: req.body.bookTitleInput, img_url: req.body.imgURLInput, description: req.body.bookDescInput}).then((results) => {
      res.send('ok');
    })
  },
  newauth: function(req, res) {
    res.render("newAuth");
  },

  discuss: function(req, res) {
    res.render("discuss");
  }
}
