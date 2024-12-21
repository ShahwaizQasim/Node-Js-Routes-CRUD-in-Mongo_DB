import express from "express"
import usersRouter from "./users/index.js";

const Router = express.Router();

Router.use("/users", usersRouter)

export default Router;