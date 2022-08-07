const express = require("express");
const path = require("path");
const api = require("./Server/Route/api");
const mongoos = require("mongoose");
const app = express();
const PORT = 3000;

mongoos.connect("mongodb://localhost/weatherApp", { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", api);
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));


app.listen(PORT, () => console.log(`server is listening, port ${PORT}`));