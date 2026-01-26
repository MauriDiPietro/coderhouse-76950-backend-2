import MongoDao from "./mongo-dao.js";
import { ProductModel } from "./models/product-model.js";

class ProductMongoDao extends MongoDao {
  constructor(model) {
    super(model);
  }

  getByName = async (name) => {
    try {
      return await this.model.findOne({ name, active: true });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const productMongoDao = new ProductMongoDao(ProductModel);
