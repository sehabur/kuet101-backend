const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const sendMailToUser = async (mailTo, mailBody, subject) => {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })
  );

  try {
    return await transporter.sendMail({
      from: {
        name: "Kuetainshub",
        address: "kuetianshub@gmail.com",
      },
      to: mailTo,
      subject,
      html: mailBody,
    });
  } catch (err) {
    return err;
  }
};

const sendMailToUserTryAccount = async (mailTo, mailBody, subject) => {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })
  );

  try {
    return await transporter.sendMail({
      from: {
        name: "Kuetainshub",
        address: mailFrom,
      },
      to: mailTo,
      subject,
      html: mailBody,
    });
  } catch (err) {
    return err;
  }
};

module.exports = {
  sendMailToUser,
  sendMailToUserTryAccount,
};
