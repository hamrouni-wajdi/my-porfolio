const nodemailer = require("nodemailer");

// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: "terrance.hoppe@ethereal.email", // generated ethereal user
//       pass: "QrURH8aEAURFP7mNwq", // generated ethereal password
//     },
//   });
//   let transporter2 = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 456,
//     secure: true,
//     auth: {
//       user: "devuptunisia@gmail.com",
//       pass: "wajdi1993",
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: "wajdihamrouni1993@gmail.com", // sender address
//     to: "wajdihamrouni501@gmail.com, hamrouniwajdi14@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

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
