import express from "express";
import { getUser } from "../controllers/gerenal.js"

const router=express.Router();

router.get("/user/:id", getUser);

export default router;