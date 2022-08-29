//require("dotenv").config();
import dotenv from 'dotenv'
dotenv.config()
import { SMTPClient } from "emailjs";

var server = new SMTPClient({
  user: process.env.User,
  password: process.env.Password,
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

export default function emailMiddelware2(req, res, next) {
  var mailOptions = {
    from: req.body.contactEmail,
    to: process.env.Reciever,
    subject: req.body.contactSubject + " from " + req.body.contactName,
    text: req.body.contactMessage,
  };

  server.send(
    {
      text: req.body.contactMessage + " " + req.body.contactEmail,
      from: req.body.contactEmail,
      to: "hamrouniwajdi14@gmail.com",
      cc: "",
      subject: req.body.contactSubject + " from " + req.body.contactName,
    },
    function (err, message) {
      console.log(err || message);
    }
  );
  next();
}
