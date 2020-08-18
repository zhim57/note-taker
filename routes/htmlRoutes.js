// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    
    //     * GET `/notes` - Should return the `notes.html` file.
    //   * GET `*` - Should return the `index.html` file

    // If no matching route is found default to home
    console.log(__dirname);
console.log(process.cwd());

    app.get("/styles.css", function (req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/assets/css/styles.css"));
    });
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    });
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
    });
    app.get("/test", function (req, res) {
        res.sendFile(path.join(__dirname,"../Develop/public/test.html"));
    });
    app.get("/index.js", function (req, res) {
        res.sendFile(path.join(__dirname,"../Develop/public/assets/js/index.js"));
    });


};