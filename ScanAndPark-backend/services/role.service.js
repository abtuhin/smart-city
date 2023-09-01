import Models from '../models';

export default {
  createRole: async (payload) => {
    try {
      const user =  await Models.Role.create(payload);
      return user;
    } catch (error) {
      throw new Error("SERVICE::: createRole failed " + error);
    }
  },
  getRoles: async () => {
    try {
      const roles = await Models.Role.findAll();
      return roles;
    } catch (error) {
      throw new Error("SERVICE::: getRoles failed " + error);
    }
  }
}