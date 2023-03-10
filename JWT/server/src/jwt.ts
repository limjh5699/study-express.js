import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

const PUBLIC_KEY = process.env.JWT_PUBLIC_KEY;
const PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

export const test = () => {
  console.log(PUBLIC_KEY, PRIVATE_KEY);
};

export const signJWT = (payload: object, expiresIn: string | number) => {
  if (PRIVATE_KEY != undefined) {
    return jwt.sign(payload, PRIVATE_KEY, {
      algorithm: "RS256",
      expiresIn,
    });
  } else {
    return console.log("PRIVATE_KEY를 불러오는데 실패했습니다.");
  }
};
