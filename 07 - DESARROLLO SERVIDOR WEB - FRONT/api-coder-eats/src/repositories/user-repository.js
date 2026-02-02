import BaseRepository from "./base-repository.js";
import { userDao } from "../daos/user-dao.js";

class UserRepository extends BaseRepository {
  constructor(dao) {
    super(dao);
  }

  getUserById = async (id) => {
    try {
      return await this.dao.getUserById(id);
    } catch (error) {
      throw error;
    }
  };

  addOrderToUser = async (userId, orderId) => {
    try {
      return await this.dao.update(userId, { $push: { pedidos: orderId } });
    } catch (error) {
      throw error;
    }
  };
}

export const userRepository = new UserRepository(userDao);
