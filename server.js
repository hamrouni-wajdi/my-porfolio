const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("./"));

app.listen(3000, () => {
  console.log(`listening on ${port}`);
});
