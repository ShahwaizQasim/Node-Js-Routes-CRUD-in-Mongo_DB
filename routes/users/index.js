import express from "express";
import postUser from "./post.js";
import getUser from "./get.js";
import deleteUser from "./delete.js";
import updateUser from "./update.js";
import LoginUser from "./login.js";

const usersRouter = express.Router();

usersRouter.post("/login", LoginUser)
usersRouter.post("/", postUser)
usersRouter.get("/", getUser)
usersRouter.delete("/:id", deleteUser)
usersRouter.put("/:id", updateUser)

export default usersRouter;