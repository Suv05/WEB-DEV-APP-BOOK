export const register = async (req, res, next) => {
  res.statusCode(200).json({ msg: "You registerd sucessfully" });
};
export const login = async (req, res, next) => {
  res.statusCode(200).json({ msg: "You loged in sucessfully" });
};
