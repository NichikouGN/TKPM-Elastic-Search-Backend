import { Router } from "express";
import { searchBooks, typeAhead } from "../controllers/home.controllers.js";

const router = Router();

router.post("/", typeAhead);        // type-ahead suggestions
router.get("/results", searchBooks); // full search results page

export default router;
