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

// var mailOptions = {
//   from: "devuptunisia@gmail.com",
//   to: "wajdihamrouni501@gmail.com",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// };


// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });
module.exports = function emailMiddelware(req,res,next){
  var mailOptions = {
    from: req.body.contactEmail,
    to: "wajdihamrouni501@gmail.com",
    subject: req.body.contactSubject + " from " + req.body.contactName,
    text: req.body.contactMessage,
  };
  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send('OK')
    }
    next()
  });
  
}

module.exports