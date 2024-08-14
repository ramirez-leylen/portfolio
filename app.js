const express = require('express');
const app = express();

const port = 3030;

app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", __dirname+"/views");



app.get('/', function(req,res) {
    res.render("index")
});



app.listen(port, () => 
    console.log('Servidor online en el puerto '+port));
