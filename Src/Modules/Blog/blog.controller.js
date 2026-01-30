import { Router } from "express";
import * as blog from"./blog.services"

export const blogRouter=Router()

//  Get ALL Blog

//  لاحظ موقتا هبعت user_id في body علشان اعرف مين اللي بيعدل علي blog او بينشا او بيمسح 
    blogRouter.get("/all",blog.blogAll)

// read single
blogRouter.get("/:id",blog.blogSingle)
//  create blog
        blogRouter.post("/create",blog.blogCreate)  
/*
اولا id اللي هيكون param هو رقم blog
اما user_id ده رقم شخص اللي هيعدل او هينشا او هيمسح 

*/
//  update blog
 blogRouter.patch("/:id",blog.blogUpdate)


// const blog=result[0]
//   //  تأكد إن صاحب البوست هو اللي بيعدل
// if(blog.user_id != user_id)
//         return res.status(404).json({success:false,message:"not allowed update this blog "})
//    بالنسبة للتعديل لازم تاكد هل مسخدم اللي انشا بوست هو هو user_id == id بتاع عنوان ما في تحديث و مسح اما الانشاء انا لسه هضيف ف مش عندي user_id 

// نفّذ التعديل



//  delete blog
        blogRouter.delete("/:id",blog.blogDelete)