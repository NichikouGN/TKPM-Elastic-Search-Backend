import express from "express";
import "dotenv/config";
import { db } from "./config/db.js";
import { es } from "./config/elastic.js";
import { searchBooks } from "./service/search.service.js";
const app = express();
const PORT = 4000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello");
});
const test = async () => {
    const res = await searchBooks("humans");
    console.log(res);
};
test();
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map