import express from "express";
import Router from "./routes/index.js";
import mongoose from "./db/dbConnect.js";

const app = express();

app.use(express.json());

mongoose.connection.on("open", () => {
    console.log("Database Connected");
})

mongoose.connection.on("error", (err) => {
    console.log("Database Not Connected", err.message);
})

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/api", Router)

app.listen("3000", () => {
    console.log("server running");

})