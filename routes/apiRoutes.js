const notedb = require('../db/db.json')
const { v4: uuidv4 } = require ('uuid');
const fs = require("fs");

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(notedb));
  
    app.get("/api/notes/:id", (req, res) => {
      res.json(notedb[Number(req.params.id)])})
  
    app.post('/api/notes', (req, res) => {
      req.body.id = uuidv4();
      notedb.push(req.body);
      console.log('did i do it?', req.body);

      fs.writeFile('./db/db.json', JSON.stringify(notedb), (err) => {
        if (err) throw err;
        console.log('It saved');
        res.json(notedb);
      });
    })
    app.delete("/api/notes/:id", (req, res) => {
        notedb.splice({id: req.params.id}, 1);
        fs.writeFile('./db/db.json', JSON.stringify(notedb), (err) => {
          if (err) throw err;
          res.json(notedb);
          console.log('CHANGED DATA!!!!');
        });
    });
}


// https://www.tabnine.com/code/javascript/functions/express/Router/delete