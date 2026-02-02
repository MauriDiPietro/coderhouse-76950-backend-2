import { userRepository } from "../repositories/user-repository.js";

class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  create = async (body) => {
    try {
      return await this.repository.create(body);
    } catch (error) {
      throw error;
    }
  };

  addOrderToUser = async (userId, orderId) => {
    try {
      return await this.repository.addOrderToUser(userId, orderId);
    } catch (error) {
      throw error;
    }
  };
}

export const userService = new UserService(userRepository);
