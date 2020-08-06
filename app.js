const express = require('express');
const app = express();
app.set('port', process.env.PORT || 2200); //2200 = port, just some random # that seems unique 



app.post("/NemoText",(req,res) => {

});

app.listen(app.get('port'));
//iframe in HTML?

module.exports = app;