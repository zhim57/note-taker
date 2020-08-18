// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// var activeNote = require("../Develop/public/assets/js/index");
let db = require("../Develop/db/db.json");
// let dbCars = require("../Develop/db/dbCars.json");
// var fs = require ("fs");


// var waitListData = require("../data/waitinglistData");

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
    // app.get("/api/notes/edit", function (req, res) {
    //     // sending a list of notes 
    //     return res.json(dbCars[id-1]);
        
    // });
    app.post("/api/notes", function (req, res) {
        // posting the note into the db.json 
        let newNote={
           make: req.body.make,
           model: req.body.model,
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
        // dbCars=dbCars.filter(e =>e.id !=req.body.id);
        let newR = { "make" : req.body.make, "model":req.body.model, "id":req.body.id};
        // let id = req.body.id
        db[req.body.id]= newR;
        
        console.log(req);
        

        // dbCars[req.params.id].model=req.body.model;
        res.json("true");   
    });   
};


    // app.get("/api/waitlist", function (req, res) {
    //     res.json(waitListData);
    // });


    //     * GET `/notes` - Should return the `notes.html` file.

    //   * GET `*` - Should return the `index.html` file

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    // app.post("/api/notes", function (req, res) {

        
    //         activeNote.push(req.body);
    //         res.json(true);
        

    // });
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
    // app.post("/api/clear", function (req, res) {
    //     activeNote.length = 0;
       

    //     res.json({ ok: true });
    // });
// };