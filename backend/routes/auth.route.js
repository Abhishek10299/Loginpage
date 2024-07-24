import {signup,login,logout} from "../controllers/auth.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const route = Router();

route.post("/signup", signup);
route.post("/login", login);
route.post("/logout", verifyJWT, logout);



export default route;
