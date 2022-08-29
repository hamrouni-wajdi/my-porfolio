require("dotenv").config();
var email = require("emailjs");

var server = email.server.connect({
  user: process.env.User,
  password: process.env.Password,
  host: "smtp.gmail.com",
  ssl: true,
});

server.send(
  {
    text: "Hey howdy",
    from: "NodeJS",
    to: "Wilson <wilson.balderrama@gmail.com>",
    cc: "",
    subject: "Greetings",
  },
  function (err, message) {
    console.log(err || message);
  }
);

module.exports = function emailMiddelware(req, res, next) {
  var mailOptions = {
    from: req.body.contactEmail,
    to: process.env.Reciever,
    subject: req.body.contactSubject + " from " + req.body.contactName,
    text: req.body.contactMessage,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("OK");
    }
  });
  next();
};

module.exports;
