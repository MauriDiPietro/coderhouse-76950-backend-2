import { UserModel } from "../models/user-model.js";
import MongoDao from "./mongo-dao.js";

class UserDao extends MongoDao {
  constructor(model) {
    super(model);
  }

  getUserById = async (id) => {
    try {
      return await this.model.findById(id).populate("pedidos");
    } catch (error) {
      throw new Error(error);
    }
  };

  getByEmail = async (correo) => {
    try {
      return await this.model.findOne({ correo });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const userDao = new UserDao(UserModel);
