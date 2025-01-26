import userModel from "../models/user.model.js";
import bcrypt from "bcrypt"
export const createUser = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res
        .status(403)
        .json({ message: "user already exists", success: false });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match", success: false });
      }
    const newUser = new userModel({ email, password, confirmPassword });
    newUser.password = await bcrypt.hash(password, 10);
    await newUser.save();
    return res.status(201).json({ message: "user created", success: true });
  } catch (error) {
    return res
      .status(501)
      .json({ message: "Internal server error", success: false });
  }
};
