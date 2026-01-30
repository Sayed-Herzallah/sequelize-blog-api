import { Router } from "express";
import *as users from "./user.services";

export const userRouter=Router()

//  get all users

userRouter.get("/all",users.userAll)
//  search query
userRouter.get("/search/query",users.userSearch)

// search letter
userRouter.get("/search/letter",users.userLetter)

//  get profile
userRouter.get("/:id",users.userProfile)

// update user
userRouter.patch("/:id",users.userUpdate)

//  delete id
userRouter.delete("/:id",users.userDelete)