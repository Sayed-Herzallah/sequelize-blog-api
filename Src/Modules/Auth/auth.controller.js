import { Router}from "express";
import * as auth from "./auth.services";
export const authRouter=Router()


//  register
      authRouter.post("/register",auth.userRegister)
//  login user
      authRouter.post("/login", auth.userLogin);
