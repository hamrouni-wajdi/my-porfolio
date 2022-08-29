require("dotenv").config();
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  ssl: true,
  port: 465,

  auth: {
    type: "login",
    user: process.env.User,
    pass: process.env.Password,
  },
  tls: {
    rejectUnauthorized: false,
  },
  logger: true,
});

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

    next();
  });
};

module.exports;
