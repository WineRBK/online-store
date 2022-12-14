import express from "express";
import dotenv from "dotenv/config";
import fileUpload from "express-fileupload";
import path from "path";
import sequelize from "./db.js";
import * as models from "./models/models.js";
import cors from "cors";
import router from "./routes/index.js";
import errorHandler from "./middleware/ErrorHandlerMiddleware.js";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve("static")));
app.use(fileUpload({}));
app.use("/api", router);

// Обработка ошибок
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
