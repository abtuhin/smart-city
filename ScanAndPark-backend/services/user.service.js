import Models from '../models';
import bcrypt from 'bcrypt';

export default {
  createUser: async (user, roleId) => {
    try {
      const newUser =  await Models.User.create(user);
      await Models.UserRole.create({userId: newUser.id, roleId: roleId});
      return newUser;
    } catch (error) {
      throw new Error("SERVICE::: " + error);
    }
  },
  loginUser: async (email, password) => {
    try {
      const user = await Models.User.findOne({ where: { email } });
      const userRole = await Models.UserRole.findOne({ where: { userId: user.id }})
      if(user === null) throw new Error("User does not exist");
      if (await bcrypt.compare(password, user.password)) return {...user.get({plain: true}), roleId: userRole.roleId} ;
      else throw new Error('Password did not mathch');
    } catch (error) {
      throw new Error("SERVICE::: " + error);
    }
  },
  getUsers: async () => {
    try {
      const users = await Models.User.findAll();
      return users;
    } catch (error) {
      throw new Error("SERVICE::: " + error);
    }
  },
  getUserByEmail: async (email) => {
    try {
      return await Models.User.findOne({ where : { email }});
    } catch (error) {
      throw new Error("SERVICE::: " + error);
    }
  },
  getUser: async (id) => {
    try {
      return await Models.User.findOne({ where : { id }});
    } catch (error) {
      throw new Error("SERVICE::: " + error);
    }
  },
  deleteUser: async (userId) => {
    try {
      return await Models.User.destroy({ where : { id: userId }});
    } catch (error) {
      throw new Error("SERVICE::: " + error);
    }
  },
  updateUser: async (userId, data) => {
    try {
      await Models.User.update(data, { where: { id: 2}});
    } catch (error) {
      throw new Error("SERVICE::: " + error);
    }
  },
  approveResidential: async (userId) => {
    try {
      await Models.UserRole.update({ roleId: 3 }, { where: { userId: userId }})
    } catch (error) {
      throw new Error("SERVICE::: " + error);
    }
  }
}