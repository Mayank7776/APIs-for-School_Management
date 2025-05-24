import express from "express";
import schoolRoutes from "./routes/school.route.js";

const app = express();

app.use(express.json());
app.use("/", schoolRoutes);

export { app };