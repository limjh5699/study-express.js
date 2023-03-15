import bcrpyt from "bcrypt";

export const hashingPassword = async (password: string) => {
  const saltRound = 10;
  const salt = await bcrpyt.genSalt(saltRound);
  const hashedPassword = await bcrpyt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  return bcrpyt.compare(password, hashedPassword);
};
