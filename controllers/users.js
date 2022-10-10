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

//getAllUsers
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort('-cretedAt');

    if (!users) {
      return res.json({ message: 'There are no Users' });
    }
    return res.json({ users });
  } catch (error) {
    res.json({ message: 'Something went wrong!' });
  }
};

//getAllUserRents
export const getAllUserRents = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.json({ message: 'There is no User!' });
    }

    return res.json(user.rents);
  } catch (error) {
    res.json({ message: 'Something went wrong!' });
  }
};
