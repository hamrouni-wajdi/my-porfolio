import { SMTPClient } from "emailjs";
 
const client = new SMTPClient({
  user: "devuptunisia@gmail.com",
  password: "sbwxbyvtzvoxwzip",
  host: "smtp.gmail.com",
  ssl: true,
  port: 465,
});

// send the message and get a callback with an error or details of the message that was sent
client.send(
  {
    text: "i hope this works",
    from: "wajdihamrouni1993@gmail.com",
    to: "hamrouniwajdi14@gmail.com",
    // cc: 'else <else@your-email.com>',
    subject: "testing emailjs",
  },
  (err, message) => {
    console.log(err || message);
  }
);

// try {
//     const message = await client.sendAsync({
//         text: 'i hope this works',
//         from: 'you <username@your-email.com>',
//         to: 'someone <someone@your-email.com>, another <another@your-email.com>',
//         cc: 'else <else@your-email.com>',
//         subject: 'testing emailjs',
//     });
//     console.log(message);
// } catch (err) {
//     console.error(err);
// }
