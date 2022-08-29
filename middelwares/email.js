//require("dotenv").config();
import { SMTPClient } from "emailjs";

var server = new SMTPClient({
  user: "devuptunisia@gmail.com",
  password: "sbwxbyvtzvoxwzip",
  host: "smtp.gmail.com",
  ssl: true,
});

// server.send(
//   {
//     text: "Hey howdy",
//     from: "NodeJS",
//     to: "Wilson <wilson.balderrama@gmail.com>",
//     cc: "",
//     subject: "Greetings",
//   },
//   function (err, message) {
//     console.log(err || message);
//   }
// );

module.exports = function emailMiddelware2(req, res, next) {
    var mailOptions = {
      from: req.body.contactEmail,
      to: process.env.Reciever,
      subject: req.body.contactSubject + " from " + req.body.contactName,
      text: req.body.contactMessage,
    };

  server.send(
    {
      text: 'req.body.contactMessage',
      from: "wajdihamrouni501@gmail.com",
      to: "devuptunisia@gmail.com",
      cc: "",
      subject: 'req.body.contactSubject' + " from " + 'req.body.contactName',
    },
    function (err, message) {
      console.log(err || message);
    }
  );
  next();
};

