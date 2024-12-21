import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/api", routes)

app.listen("3000", () => {
    console.log("server running");

})