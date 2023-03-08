import express from "express";
import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

const app = express();

const PORT = process.env.PORT || 3003;
const SECRET_KEY = process.env.JWT_SECRET;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("<div>수정</div>");
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버가 작동하고 있습니다.`);
});
