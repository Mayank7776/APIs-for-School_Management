import express from "express";
import { addSchool, getSchools } from "../controllers/school.controller.js";

const router = express.Router();

router.post("/addSchool", addSchool);
router.get("/listSchool", getSchools);

export default router;