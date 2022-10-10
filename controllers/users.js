import User from '../models/User.js';

//Create User
export const createUser = async (req, res) => {
  try {
    const { firstname, email, address } = req.body;
    const newUser = new User({
      firstname,
      email,
      address,
    });
    await newUser.save();
    return res.json({ newUser });
  } catch (error) {
    res.json({ message: 'Something went wrong' });
  }
};
