import { UserModel } from "./models/user-model.js";
import MongoRepository from "./mongo-repository.js";

class UserRepository extends MongoRepository {
  constructor(model) {
    super(model);
  }

  getUserByEmail = async (email) => {
    try {
      return await this.model.findOne({ email });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const userRepository = new UserRepository(UserModel);
