import express from "express";
import apiRouter from "./routes/api/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);
// app.use('/', viewsRouter);
// app.use('/api/v2', apiV2Router)

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server ok en puerto: ${PORT}`);
});
