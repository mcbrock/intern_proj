const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send('Hello World, hope this works'); 
  });

  app.listen(3000,function(){
    console.log('Server is on port 3000');
  });