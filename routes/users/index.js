import express from "express";
import postUser from "./post.js";
import getUser from "./get.js";

const usersRouter = express.Router();

usersRouter.post("/", postUser)
usersRouter.get("/", getUser)

export default usersRouter;