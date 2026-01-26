import { Router } from "express";
import ProductController from "../controllers/product-controller.js";
import config from "../config/index.js";
import ProductMongoDao from "../daos/mongodb/product-dao.js";
import ProductFSDao from "../daos/filesystem/product-dao.js";
import ProductRepository from "../repositories/product-repository.js";
import ProductService from "../services/product-service.js";

const router = Router();

const DAO = config.PERSISTENCE === 'MONGODB' ? new ProductMongoDao() : new ProductFSDao();

const repository = new ProductRepository(DAO);

const service = new ProductService(repository);

const controller = new ProductController(service);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;

// DB -> DAOS -> REPOSITORY -> SERVICES -> CONTROLLERS -> ROUTES