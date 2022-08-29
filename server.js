require('dotenv').config()
const express = require("express");
const app = express();
const emailMiddelware = require("./middelwares/mail")
const port = process.env.PORT || 3000;
const emailMiddelware2 = require("./middelwares/email")

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("./"));
//app.use(emailMiddelware)


app.post("/form",emailMiddelware2);
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
