import express from "express";
import "express-async-errors";
import cors from "cors";
import { errorHandler } from "./src/errors/appError.js";
import { playersRouter } from "./src/routes/playeres.routes.js";
import { scoreRouter } from "./src/routes/score.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(errorHandler);

//routes
app.use("/players",playersRouter);
app.use("/scores",scoreRouter);



app.listen(PORT, () => {
    console.log(`Server is running in  http://localhost:${PORT}`);
});
