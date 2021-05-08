const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//Static files

app.use(express.static('src'))
app.use('/css', express.static(__dirname + '/src/css'));
app.use('/js', express.static(__dirname + '/src/js'));


app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, '/App.html'));
});

console.log(path);
console.log(__dirname + '/src/css');

// listen on port 3000
app.listen(port, () => `Server running on port ${port} 🔥`);
module.exports = app;