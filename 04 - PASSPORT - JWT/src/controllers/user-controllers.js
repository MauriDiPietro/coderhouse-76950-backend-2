import { userServices } from "../services/user-services.js";

class UserController {
  constructor(services) {
    this.services = services;
  }

  register = async (req, res, next) => {
    try {
      const response = await this.services.register(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await this.services.login(email, password);
      const token = this.services.generateToken(user);
      // res.header("Authorization", token).json({ token });
      res.cookie('accessToken', token, { httpOnly: true }).json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController(userServices);
