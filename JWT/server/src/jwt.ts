import jwt from "jsonwebtoken";
import { promisify } from "util";
import env from "dotenv";
env.config();

const PUBLIC_KEY = process.env.JWT_PUBLIC_KEY;
const PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

export const createAccessToken = async (payload: object) => {
  if (PRIVATE_KEY) {
    return jwt.sign(payload, PRIVATE_KEY, {
      algorithm: "HS256",
      expiresIn: "15m",
    });
  } else {
    return console.log("PRIVATE_KEY를 불러오는데 실패했습니다.");
  }
};

export const createRefreshToken = (payload: object) => {
  if (PRIVATE_KEY) {
    const token = jwt.sign(payload, PRIVATE_KEY, {
      algorithm: "HS256",
      expiresIn: "14d",
    });
    return token;
  } else {
    return console.log("PRIVATE_KEY를 불러오는데 실패했습니다.");
  }
};

// export const verifyAccessToken = (token: string) => {
//   let decoded: any = null;
//   if (PRIVATE_KEY) {
//     try {
//       decoded = jwt.verify(token, PRIVATE_KEY);
//       return {
//         ok: true,
//         email: decoded.email,
//       };
//     } catch (err) {
//       return {
//         ok: false,
//         message: err,
//       };
//     }
//   } else {
//     return console.log("PRIVATE_KEY를 불러오는데 실패했습니다.");
//   }
// };

export const verifyToken = async (token: string, email: string) => {
  if (PRIVATE_KEY) {
    try {
      const payload: any = jwt.verify(token, PRIVATE_KEY);

      return payload.email === email;
    } catch (error) {
      return false;
    }
  } else {
    console.log("PRIVATE_KEY를 불러오는데 실패했습니다.");
    return false;
  }
};
