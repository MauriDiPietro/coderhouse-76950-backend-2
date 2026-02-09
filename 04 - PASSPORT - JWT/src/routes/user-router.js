import { Router } from "express";
import { userController } from "../controllers/user-controllers.js";
import { passportCall } from "../middlewares/passport/passport-call.js";
import { verifyRole } from "../middlewares/verify-role.js";
import { UserDTO } from "../dto/user-dto.js";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
/* ------------------------------------ - ----------------------------------- */
router.get("/current-headers", passportCall("jwt"), (req, res) =>
  res.json({ user: req.user }),
);
router.get(
  "/current-headers-admin",
  passportCall("jwt"),
  verifyRole("ADMIN"),
  (req, res) => res.json({ user: req.user }),
);
/* ------------------------------------ - ----------------------------------- */
router.get("/current-cookies", passportCall("current"), (req, res) =>
  res.json({ user: req.user }),
);
router.get(
  "/current-cookies-admin",
  passportCall("current"),
  verifyRole("ADMIN"),
  (req, res) => res.json({ user: new UserDTO(req.user) }),
);


export default router;
