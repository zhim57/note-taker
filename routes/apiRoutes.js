// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var notesData = require("../data/notesData");
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
        res.json(notesData);

    });
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

    app.post("/api/notes", function (req, res) {

        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }

        else {
            waitListData.push(req.body);
            res.json(false);
        }
    });
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
    app.post("/api/clear", function (req, res) {
        tableData.length = 0;
        waitListData.length = 0;

        res.json({ ok: true });
    });
};