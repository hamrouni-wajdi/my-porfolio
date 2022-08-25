require('dotenv').config()
const express = require("express");
const app = express();
const emailMiddelware = require("./middelwares/mail")
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("./"));
//app.use(emailMiddelware)


app.post("/form",emailMiddelware);
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
