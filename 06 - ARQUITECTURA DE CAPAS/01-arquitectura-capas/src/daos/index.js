import { productFSDao } from "./filesystem/product-dao.js";
import { initMongoDB } from "./mongodb/connection.js";
import { productMongoDao } from "./mongodb/product-dao.js";

let productDao;
// let userDao;
const PERSISTENCE = process.env.PERSISTENCE;

switch (PERSISTENCE) {
  case "MONGODB":
    initMongoDB()
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("Failed to connect to MongoDB", err));
    productDao = productMongoDao;
    // userDao = userMongoDao;
    break;
  case "FILESYSTEM":
    productDao = productFSDao;
    break;

  default:
    break;
}

export default {
    productDao,
    // userDao,
    // cartDao,
}
