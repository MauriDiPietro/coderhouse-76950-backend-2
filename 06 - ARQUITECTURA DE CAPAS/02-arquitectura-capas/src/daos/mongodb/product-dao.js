import MongoDao from "./mongo-dao.js";
import { ProductModel } from "./models/product-model.js";

export default class ProductMongoDao extends MongoDao {
  constructor() {
    super(ProductModel);
  }

  getByName = async (name) => {
    try {
      return await this.model.findOne({ name, active: true });
    } catch (error) {
      throw new Error(error);
    }
  };
}
