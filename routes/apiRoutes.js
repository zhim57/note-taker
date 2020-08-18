// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

let db = require("../Develop/db/db.json");
 

// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/notes", function (req, res) {
        // sending a list of notes 
        return res.json(db);
    });
   
    app.post("/api/notes", function (req, res) {
        // posting the note into the db.json 
        let newNote={
           title: req.body.title,
           text: req.body.text,
           id: (db.length)
        };
        db.push(newNote);
        res.json(true)     
    });
    app.delete('/api/notes/:id', function (req, res){
        // deleting one note in db.json
     db.splice(req.params.id,1);
     db.forEach(note=> {
         note.id=db.indexOf(note)
     })
      res.json("true");  
    });  



    app.put('/api/notes/', function (req, res){
        // edit the existing note in db.json

        let newR = { "title" : req.body.title, "text":req.body.text, "id":req.body.id};
      
        db[req.body.id]= newR;
        

        res.json("true");   
    });   
};

