const express = require('express');
const app = express();
const PORT = process.env.PORT || 2200;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


const cp = require('child_process');
var user_data = ""; //what we get from Nemobot user (the payload)

var link = cp.fork("./home/grant/programs/portfolio/HeadlessSearch.js", user_data); //Not 100% sure about the directory

app.post("/NemoText",(req,res) => {

});


//iframe in HTML?

module.exports = app;