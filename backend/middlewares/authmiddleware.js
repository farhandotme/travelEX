import jwt from "jsonwebtoken";
export const authMiddlewares = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  console.log("middleware token", token);
  try {
    const decoded = jwt.verify(token, "secret");
    console.log("decoded id", decoded.id);
    req.userID = decoded.id;
    next();
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
