import { Router } from "express";
import { home } from "./controller";

const router = new Router();

router.get('/' , home)


export default router