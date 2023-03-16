import jwt from "jsonwebtoken";
import fs from "fs";
import env from "dotenv";
env.config();

const PRIVATE_KEY = fs.readFileSync("key/privateKey.txt").toString();
const PUBLIC_KEY = fs.readFileSync("key/publicKey.txt").toString();

export const createAccessToken = (payload: object) => {
  const token = jwt.sign(payload, PRIVATE_KEY, {
    algorithm: "ES256",
    expiresIn: "15m",
  });
  return token;
};

export const createRefreshToken = (payload: object) => {
  const token = jwt.sign(payload, PRIVATE_KEY, {
    algorithm: "ES256",
    expiresIn: "14d",
  });
  return token;
};

export const verifyToken = async (token: string, email: string) => {
  try {
    const payload: any = jwt.verify(token, PUBLIC_KEY);
    return payload.email === email;
  } catch (error) {
    console.log(error);
    return false;
  }
};
