import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

//Router Imports
import { teacherRouter } from "./routes/teacherRoutes";

const app = express();

app.use(cors());
app.use(express.json);

app.use(teacherRouter);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(6123, () => console.log("Server is Running"));
