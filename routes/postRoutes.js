import { Router } from "express";
import { create_Post } from "../controllers/postController.js";

const postRouter=Router()
postRouter.post("/post", create_Post);

export default postRouter;
