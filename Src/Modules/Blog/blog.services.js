import { db } from "../../DB/contaction";

export const blogAll=(req,res)=>{
                const query=`select   * from blog`
        db.execute(query,(error,result)=>{
            if(error) return res.status(500).json({message:error.message})
                if(result.length==0)
                  return res.status(404).json({success:false,message:"not found blog from Data base"})
                return res.status(200).json({success:true,data:result})
        })
}
export const blogSingle=(req,res)=>{
        const {id}=req.params
        const query=`select id,body,title from blog where id=?`
        const values=[id]
        db.execute(query,values,(error,result)=>{
                if(error)
                        return res.status(500).json({success:false,message:error.message})
                if(result.length==0)
                        return res.status(404).json({success:false,message:"not found id"})
                if(result.length>0)
                        return res.status(200).json({success:true,data:result[0]})
        })
}
export const blogCreate=(req,res)=>{
                const {title,body,user_id}=req.body;
                // check user_id علشان مش يكون عندي مش ينشا id عندي جديد
                const userQuery=`select id from users where id=?`
                const userValues=[user_id]
                db.execute(userQuery,userValues,(error,result)=>{
                  if(error){
               return  res.status(500).json({success:false,message:error.message})
                  }if(result.length==0)
                        return res.status(404).json({success:false,message:"not found user_id create blog"})
                  if(result.length>0){
                        // user عندي بالفعل
                   const query=`insert into blog (title,body,user_id) values(?,?,?)`
         const values=[title,body,user_id]
        db.execute(query,values,(err,result)=>{
            if(err) return res.status(500).json({message:err.message})
                if(result.affectedRows==0)
                        return res.status(404).json({success:false,message:"Failed Create blog"})
                return res.status(201).json({success:true,message:"Create  Blog",data:result})
})
        }
                
        }) 
}
export const blogUpdate=(req,res)=>{
                const {id}=req.params
             const {title,user_id}=req.body
    // تأكد إن البوست موجود
             const userQuery=`select id,user_id from blog where id =? and user_id=?`
             const userValues=[id,user_id]
             db.execute(userQuery,userValues,(err,result)=>{
                if(err){
                return res.status(500).json({success:false,message:err.message})}
    if(result.length>0){
const query=`update blog set title=? where id =? and user_id=?`
                const values=[title,id,user_id]
        db.execute(query,values,(error,result)=>{
            if(error) return res.status(500).json({message:error.message})
                if(result.affectedRows==0)
                return res.status(404).json({success:false,message:"Failed update blog"})
         if(result.affectedRows>0)
                return res.status(200).json({success:true,message:"Blog Update success",data:result})
        })
}else{
return res.status(404).json({success:false,message:"invalid user id"})
}
             }) 
        }
export const blogDelete=(req,res)=>{
                const {id}=req.params
                const{user_id}=req.body
                const findQuery=`select id , user_id from blog where id=? and user_id=?`
                const valueQuery=[id,user_id]
                db.execute(findQuery,valueQuery,(err,result)=>{
                        if (err) {
                        return res.status(500).json({success:false,message:err.message})
                        }if(result.length==0){
                                return res.status(404).json({success:false,message:"not found blog id"})
                        }
                        else{
                 const query=`delete from blog where id =? and user_id=?`
                const values=[id,user_id]
        db.execute(query,values,(error,result)=>{
            if(error) return res.status(500).json({message:error.message})
                if(result.affectedRows==0)
                        return res.status(404).json({success:false,message:"not found blog"})
                return res.status(200).json({success:true,message:"blog delete success",data:result})
        })
                        }
                })
                
}


