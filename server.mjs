import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { publicDecrypt } from "crypto";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Static files

app.use(cors())
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/src', express.static(__dirname + 'public/src'))


app.get('', (req, res) => {
  res.sendFile(__dirname + '/public/App.html')
})

app.use(cors());

// listen on port 3000
app.listen(port, () =>
  console.log('Example app listening on port 3000!'),
);

export default app;

