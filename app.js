const express = require('express');
const app = express();
const PORT = process.env.PORT || 2200;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


app.post("/NemoText",(req,res) => {

});


//iframe in HTML?

module.exports = app;