import express from "express";
import { connectDB } from "./config/db-connection.js";
import userRouter from "./routes/user-router.js";
import orderRouter from "./routes/order-router.js";
import businessRouter from "./routes/business-router.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173"}));

app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/business", businessRouter);

connectDB().then(() => console.log("DB connected")).catch((err) => console.log(err));

app.listen(8080, () => console.log("Server up on port 8080"));
