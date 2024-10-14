import express from "express";
import send_reservation from "../controller/reservation.js";
import guest from "../controller/guest.js";
import login from "../controller/login.js";
import register from '../controller/register.js'



const router = express.Router();

router.post("/send", send_reservation);
router.post('/guest',guest)
router.post('/register',register)
router.post('/login',login)



export default router;