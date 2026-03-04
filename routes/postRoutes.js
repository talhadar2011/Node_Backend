import { Router } from "express";
import { create_Post } from "../controllers/postController";

const router=Router()
router.post("/post", create_Post);
