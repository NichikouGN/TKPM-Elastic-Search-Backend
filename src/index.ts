import express from "express";
import "dotenv/config";
import homeRouter from "./routes/home.routes.js";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/search", homeRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
