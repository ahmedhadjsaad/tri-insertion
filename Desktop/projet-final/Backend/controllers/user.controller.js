const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const config = require('config')
const User = require('../model/User')

const secretOrKey = config.get('secretOrKey')

exports.register =async (req,res) => {
    const {name , familyName , email , password} = req.body;
    try {
        const searchRes = await User.findOne({email})
        if(searchRes)
        return res.status(401).json({msg:`user already exist !!`})
        const newUser = new User ({
            name,
            familyName,
            email,
            password
        });
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt)
        newUser.password = hash
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({errors : error})
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ msg: `bad credentials!` });
      const isMatch = await bcrypt.compare(password, user.Password);
      if (!isMatch) return res.status(401).json({ msg: `bad credentials!!` });
      const payload = {
        id: user._id,
        name: user.name,
        familyName : user.FamilyName,
        email: user.email,
        password: user.Password,
      };
  
      const token = await jwt.sign(payload, secretOrKey);
      return res.status(200).json({ token: `Bearer ${token}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: error });
    }
  };
  