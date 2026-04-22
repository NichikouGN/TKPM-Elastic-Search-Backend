import { Router } from "express";
import { searchBooks, typeAhead } from "../controllers/home.controllers.js";
const router = Router();
router.post("/", typeAhead);
export default router;
//# sourceMappingURL=home.routes.js.map