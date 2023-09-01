import roleService from '../services/role.service';

export default {
  createRole: async (req, res) => {
    try {
      const roleRecord = await roleService.createRole(req.body);

      res.status(201).json({
        data: roleRecord,
        message: 'Role created successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  getRoles: async (req, res) => {
    try {
      const roles = await roleService.getRoles();

      res.status(200).json({
        data: roles,
        message: 'Roles fetched successfully!',
        success: true,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  }
}
