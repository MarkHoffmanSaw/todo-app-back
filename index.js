import express, { json } from "express";
import userRouter from "./routes/user.route.js";
import projectRouter from "./routes/project.route.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(json());

// api - params1, useRouter - params2 роутер с данными
app.use("/api", userRouter);
app.use("/api", projectRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
