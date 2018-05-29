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

  discuss: function(req, res) {
    console.log(knex.select('*').from('books').leftJoin('comments', 'book_id', `id.${req.params.id}`).toString());

    knex.raw('books').then((feed) => {
      console.log(feed);
      res.render('discuss', {
        feed:feed
      })
    })
  },

  addbook: function(req, res) {
    knex('authors').then((results) => {
      res.render('newBook', {
        results: results
      })
    })
  },

  addbookdb: function(req, res) {
    knex('books').insert({
      title: req.body.bookTitleInput,
      img_url: req.body.imgURLInput,
      description: req.body.bookDescInput,
      author: req.body.authorPick
    }).then((results) => {
      res.redirect('/');
    })
  },

  newauth: function(req, res) {
    res.render("newAuth");
  },

  newauthdb: function(req, res) {
    knex('authors').insert({
      auth_name: req.body.authName,
      auth_bio: req.body.authBio
    }).then((results) => {
      res.redirect('/addbook');
    })
  },


}
