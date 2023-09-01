import userService from '../services/user.service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default {
  createUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.user.password, salt);
      const isUserExist = await userService.getUserByEmail(req.body.user.email);

      if(isUserExist) {
        res.status(200).json({
          message: 'User already exist!',
          success: true,
        });
      }else {
        const userRecord = await userService.createUser({...req.body.user, password: hashedPassword}, req.body.roleId);
        res.status(201).json({
          data: userRecord,
          message: 'User created successfully!',
          success: true,
        });
      }      
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userService.loginUser(email, password);
      const jwtToken = jwt.sign({ user }, process.env.JWT_ACCESS_TOKEN);

      res.status(200).json({
        data: { ...user },
        accessToken: jwtToken,
        message: 'User logged in successfully',
        success: true
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await userService.getUsers();

      res.status(200).json({
        data: users,
        message: 'Users fetched successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  getUserByEmail: async (req, res) => {
    try {
      const user = await userService.getUserByEmail(req.params.email);
      res.status(200).json({
        data: user,
        message: 'User fetched successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });  
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await userService.getUser(req.params.id);
      res.status(200).json({
        data: user,
        message: 'User fetched successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });  
    }
  },
  deleteUser: async (req, res) => {
    try {
      await userService.deleteUser(req.params.userId);

      res.status(200).json({
        message: 'Users deleted successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  updateUser: async (req, res) => {
    try {
      await userService.updateUser(req.params.id, req.body);
      res.status(200).json({
        message: 'User updated successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  approveResidential: async (req, res) => {
    try {
      await userService.approveResidential(req.params.id);
      res.status(200).json({
        message: 'User updated successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  }
}
