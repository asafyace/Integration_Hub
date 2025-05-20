import express from "express";
import cors from "cors";
import awsRouter from "./release-listener.aws.js";
import azureRouter from "./release-listener.azure.js";

const app = express();
app.use(cors());

app.use("/api", awsRouter);
app.use("/api", azureRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
