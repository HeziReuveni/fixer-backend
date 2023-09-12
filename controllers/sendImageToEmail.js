const sendImageToEmail = (req, res) => {
    const msg = {
        from: "fixer.platform@gmail.com",
        to: "talhayoun8@gmail.com",
        subject: "הודעה מאת Fixer",
        attachments:[
            {
                file
            }
        ]
        // text: ``,
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
}