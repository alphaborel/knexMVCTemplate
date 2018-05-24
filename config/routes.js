//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  app.get('/', template.index);
  app.get('/addbook', template.addbook);
  app.post('/addbook', template.addbookdb);
  app.get('/discuss', template.discuss);
  app.get('/newauth', template.newauth);
}
