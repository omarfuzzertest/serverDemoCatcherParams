module.exports = function(app) {

    var notes = require('../controllers/note.controller.js');

    app.get('/api/catcher/parametes', notes.parametersReceiver);

}