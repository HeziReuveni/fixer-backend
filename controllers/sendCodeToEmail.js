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


  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
       user: "fixer.platform.auth@gmail.com",
       pass: "iwwnnphgwttccesc"
       
    },
    tls: {
      rejectUnauthorized: false
    }
 });
 
 const mailOptions = {
    from: "fixer.platform.auth@gmail.com",
    to: email,
    subject: "קוד האימות של מאת Fixer",
    text:"קוד האימות שלך הינו - " + code
 };
 
 transporter.sendMail(mailOptions, function(error){
    if(error){
       res.status(400).send(error);
    }else{
      res.status(200).send("Email sent to: " + email);
    }
 });
}

module.exports = { sendCodeToEmail };
