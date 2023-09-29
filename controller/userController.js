const { generateToken } = require("../config/jwtToken");
const User = require("../model/user");
const customResourceResponse = require("../utils/constant");
const asyncHandler = require("express-async-handler");

//regitser user
const registerUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const getUser = await User.findOne({ email: email });

  if (!getUser) {
    const newUser = await User.create(req.body);
    res.statusCode = customResourceResponse.created.statusCode;
    token = generateToken(newUser.id);
    return res.json({
      Message: customResourceResponse.created.message,
      Data: newUser,
      token,
    });
  } else {
    throw new Error("User already Exists.");
  }
});

//login user
const loginUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const password = req.body.password;
  const getUser = await User.findOne({ email: email });

  //console.log("user controller line 29 ==> getUser : " + getUser);
  if (getUser && getUser.isPasswordMatched(req.body.password)) {
    getUser.token = generateToken(getUser.id);
    res.status(200).json({
      getUser,
      // token: getUser.token
    });
    console.log("41>>>>", getUser.token);
  } else {
    throw new Error("Invalid credentials");
  }
});

//getAllUser
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json({ Users: allUsers });
  } catch (error) {
    throw new Error(error);
  }
});

//get user by id

const getUserById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await User.findById({ _id: id });
    res.json({
      User: getUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//delete user
const deleteUserById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete({ _id: id });
    res.json({
      Message: "User deleted successfully...!",
      User: deleteUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//update user
const updateUserById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
      },
      { new: true }
    );
    res.json({
      Message: "User updated successfully...!",
      User: updatedUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUserById,
};
