import express from "express"
import { login, register, userList } from "../controller/user.controller.js";
import { authentication } from "../authentication/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", register)
router.post("/list", authentication, userList)
// router.post("/test", authentication, register)

export default router;