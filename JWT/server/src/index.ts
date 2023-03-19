import express, { Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import cookieParser from "cookie-parser";
import env from "dotenv";
env.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버가 작동하고 있습니다.`);
  routes(app);
});
