const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("./"));

app.post("/form", (req, res) => {
  console.log(req.body);
  res.send("OK");
});
app.listen(3000, () => {
  console.log(`listening on ${port}`);
});
