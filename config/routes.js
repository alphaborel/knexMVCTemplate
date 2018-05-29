//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  app.get('/', template.index);
  app.get('/discuss/:id', template.discuss);
  app.get('/addbook', template.addbook);
  app.post('/addbook', template.addbookdb);
  app.get('/newauth', template.newauth);
  app.post('/newauth', template.newauthdb);
}
