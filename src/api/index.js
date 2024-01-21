import { Router } from "express";
import contacts from './contacts';

const router = new Router();


router.use('/contact' , contacts)

export default router