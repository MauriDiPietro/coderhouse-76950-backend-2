import { Router } from "express";
import { sendGmail, sendGmailHbs } from "../controllers/email.controller.js";

const router = Router();

router.post('/gmail', sendGmail)
router.post('/gmail-hbs', sendGmailHbs)

export default router;

