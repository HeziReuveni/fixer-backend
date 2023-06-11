const Vonage = require("@vonage/server-sdk");
const UserCodes = require("../models/ValidationCodes");

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_SECRET_TOKEN,
});
// שליחת ההודעה מתבצעת רק עבור המספר שלי. יש לשלם להם עבור השירות ולתת למספר להיות דינמי ואז לבדוק את מה שהוזן מהמשתמש קיים במסד הנתונים
const sendSms = async (req, res) => {
  const { phoneNumber } = req.body;
  if (!phoneNumber) {
    return res.status(400).send("No phone number received");
  }
  const code = Math.floor(Math.random() * 9000) + 1000;
  try {
    const codes = new UserCodes({
      opt: code,
    });

    if (!codes) {
      res.status(400).send("Unable to generate a code for the user");
    }
    await codes.save();
  } catch (error) {
    res.send(error, "Failed to create user code");
  }

  const from = "Hezi";
  const to = `972507727731`;
  const text = `Verify your account using this code ${code}`;

  vonage.message.sendSms(from, to, text, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  });
};

module.exports = { sendSms };
