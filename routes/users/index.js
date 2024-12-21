import express from "express";
import postUser from "./post.js";
import getUser from "./get.js";
import deleteUser from "./delete.js";

const usersRouter = express.Router();

usersRouter.post("/", postUser)
usersRouter.get("/", getUser)
usersRouter.delete("/:id", deleteUser)

export default usersRouter;