import express from "express";
import doQuery from "./src/module.js";

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    doQuery();
    res.send('Hello World!');
});
  
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
});


