import express from "express";
import dotenv from "dotenv";
import mainRoutes from "./Routes/routes.js";
import log from "morgan";

dotenv.config({ path: "config.env" });

const app = express();
const PORT = process.env.PORT || 3000;


app.use(log("dev"));
app.use(mainRoutes);
app.set("view engine", "ejs");
app.set("views", "src");

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Your website is running on http://localhost:${PORT} \nthis is belong to ${process.env.NODE_BELONG}`);
});