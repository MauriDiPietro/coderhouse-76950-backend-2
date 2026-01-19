import { Router } from "express";
const router = Router();

// router.get("/:email", (req, res) => {
//   const { email } = req.params;
//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//   if (!emailRegex.test(email))
//     return res.status(400).json({ message: "email invalido" });
//   return res.json({ message: "email valido" });
// });

/* ------------------------------------ - ----------------------------------- */

// router.get(
//   "/:email([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})",
//   (req, res) => {
//     res.status(200).json({ message: "email valido" });
//   },
// );

/* ------------------------------------ - ----------------------------------- */

router.get("/:email", (req, res) => {
  res.send("email valido");
});

router.param("email", (req, res, next, email) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const isValid = emailRegex.test(email);
  if (!isValid) return res.status(400).json({ message: "email invalido" });
  next();
});

/* ------------------------------------ - ----------------------------------- */
router.post("/admin", (req, res) => {
  res.send("registro");
});

router.put("/admin", (req, res) => {
  res.send("actualizacion");
});

router.delete("/admin", (req, res) => {
  res.send("eliminacion");
});

router.all("/users/admin/*", (req, res, next) => {
  if ((middAuth(), middAdmin())) next();
  return res.status(403).send("Acceso denegado");
});
/* ------------------------------------ - ----------------------------------- */
router.get("*", (req, res) => {
  res.json({ message: "Recurso inexistente" });
});

export default router;
