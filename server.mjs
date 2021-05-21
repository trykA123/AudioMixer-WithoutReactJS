import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Static files


app.use(express.static(path.join(__dirname, '/css/')));
app.use(express.static(path.join(__dirname, '/src/')));
app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, '/App.html'));
});

app.use(cors());
console.log(path.join(__dirname, 'AudioMixer-WithoutReactJS'))

// listen on port 3000
app.listen(port, () =>
  console.log('Example app listening on port 3000!'),
);

export default app;

