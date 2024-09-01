const User = require("../model/user");
const JWT = require("jsonwebtoken");
const secretKey = "rajesh10";

// Register User
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username,email, password });
    const result = await newUser.save();
    res.status(201).send({ message: "User registered successfully.", result });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

//login user
const userLogin = async (req, res) => {
  try {
   const data = req.body;
    const userEmail = await User.findOne({email: data.email});
    console.log(newEmail);

    if (!userEmail) {
      res.status(500).json({ message: "user email not verified" });
    } else {

      const Password = await User.findOne({password: data.password});
      if (!Password) {
        res.status(500).json({ message: "user password not verified" });
      } else {
        // Generate a JWT token
        const token = JWT.sign(
          {id: userEmail._id, email: userEmail.email }, 
          secretKey,
          {expiresIn: "10m"});

        res.status(201).json({ userEmail, token});
    }
  }
  } catch (error) {
    res.status(500).send("Server Error");
  }
};


module.exports = {registerUser, userLogin };
