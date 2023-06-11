const UserCodes = require("../models/ValidationCodes");
const UserDetails = require("../models/userDetailsModel");
const nodemailer = require("nodemailer");

const sendCodeToEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Email Field are Required");
  }
  const code = Math.floor(Math.random() * 900000) + 100000;
  try {
    const emailExist = await UserDetails.findOne({ email });
    if (emailExist) {
      return res.status(400).send("Email are a exist");
    }
    const codes = new UserCodes({
      opt: code,
    });
    if (!codes) {
      return res.status(400).send("Unable to generate a code for the user");
    }
    await codes.save();
  } catch (error) {
    res.send(error, "Failed to create user code");
  }
  const msg = {
    from: "fixer.platform@gmail.com",
    to: email,
    subject: "הודעה מאת Fixer",
    text: `הסיסמה שלך לאימות: ${code}`,
  };
  nodemailer
    .createTransport({
      service: "gmail",
      auth: {
        user: "fixer.platform@gmail.com",
        pass: "qxxmooorttifdbuk",
      },
      port: 465,
      host: "smtp.gmail.com",
    })
    .sendMail(msg, (err) => {
      if (err) {
        return res.status(400).send("Failed to send email");
      } else {
        return res
          .status(200)
          .send("User authentication message sent to: " + email);
      }
    });
};

nodemailer.createTransport;

module.exports = { sendCodeToEmail };
