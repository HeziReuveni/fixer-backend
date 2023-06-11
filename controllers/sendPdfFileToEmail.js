const nodemailer = require("nodemailer");

const sendPdfFile = (req, res) => {
  //   let transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: "fixer.platform@gmail.com",
  //       pass: "qxxmooorttifdbuk",
  //     },
  //   });

  //   // Define the email options
  //   let mailOptions = {
  //     from: "fixer.platform@gmail.com",
  //     to: "hezi0303@gmail.com",
  //     subject: "PDF attachment",
  //     attachments: [
  //       {
  //         filename: "attachment.pdf",
  //         content: req.body,
  //       },
  //     ],
  //   };

  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.error(error);
  //       res.sendStatus(500);
  //     } else {
  //       console.log(`Email sent: ${info.response}`);
  //       res.sendStatus(200);
  //     }
  //   });
  console.log("Hello Word!");
};

module.exports = { sendPdfFile };
