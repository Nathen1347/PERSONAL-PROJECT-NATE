const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const postRegister = (req, res) => {
  const { userName, email, firstName, lastName, password } = req.body;

  if (userName && password && email) {
    const db = req.app.get("db");

    db.check_username(userName).then((user) => {
      const existingUser = user[0];
      if (existingUser) {
        res.status(400).send("Username Taken.");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        db.register_user(userName, email, firstName, lastName, hash).then(
          (newUser) => {
            delete newUser.password;
            req.session.user = newUser;
            res.status(200).send(newUser);
          }
        );
      }
    });
  } else {
    res
      .status(400)
      .send(
        "Please provide username, email, first name, last name and password."
      );
  }

  let transport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
      ciphers:'SSLv3'
   },
    auth: {
      user: 'nate1347@gmail.com',
      pass: 'Bronco1347'
    },
  });

  let mailText = {
    from: "Modern.Finance.2021@outlook.com",
    to: 'nate1347@gmail.com',
    subject: "Welcome to Modern Finance",
    text: "Thank you for registering with Modern Finance! You are on your way to financial freedom and happiness!",
  };

  transport.sendMail(mailText, function(err){
    if (err) {
      console.log(err);
    }
    console.log('Message Sent')
  });
};

const postLogin = (req, res) => {
  const db = req.app.get("db");
  const { userName, password } = req.body;
  db.check_username(userName).then((user) => {
    if (!user[0]) {
      return res.status(404).send("User does not exist, please try again");
    } else if (!bcrypt.compareSync(password, user[0].password)) {
      return res.status(403).send("Incorrect Password");
    }
    delete user[0].password;
    req.session.user = user[0];
    res.status(200).send(user[0]);
  });
};

const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
};

const getUser = (req, res) => {};

module.exports = {
  getUser,
  postRegister,
  postLogin,
  logout,
};
