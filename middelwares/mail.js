const nodemailer = require("nodemailer");


var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  ssl: true,
  port: 465,

  auth: {
    user: "devuptunisia@gmail.com",
    pass: "sbwxbyvtzvoxwzip",
  },
});

var mailOptions = {
  from: "devuptunisia@gmail.com",
  to: "wajdihamrouni501@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};


transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
