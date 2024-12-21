import express from "express";
import Router from "./routes/index.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/api", Router)

app.listen("3000", () => {
    console.log("server running");

})