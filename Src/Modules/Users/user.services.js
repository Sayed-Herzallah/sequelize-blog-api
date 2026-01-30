import { db } from "../../DB/contaction";
export const userAll= (req,res)=>{
        db.execute("select * from users",(error,result)=>{
            if(error) return res.status(500).json({message:error.message})
                return res.status(200).json({success:true,user:result})
        })
}

export const userSearch=(req,res)=>{
        const {full_name}=req.query
        const query=`select * from users where full_name=?`
        const values=[full_name]
        db.execute(query,values,(err,result)=>{
                if(err)
                return res.status(500).json({success:false,message:err.message})
        if(result.length==0){

   return res.status(404).json({success:false,message:"not found user by search query"})
        }else{

                return res.status(200).json({success:true,data:result})
        }
        })
}
export const userLetter=(req,res)=>{
        const {letter}=req.query
        const query=`select * from users where full_name like ?`
        const values=[letter+ "%"]
        db.execute(query,values,(err,result)=>{
                if(err)
                return res.status(500).json({success:false,message:err.message})
        if(result.length==0)
        return res.status(404).json({success:false,message:"not found search letter"})
       return res.status(200).json({success:true,data:result})
        })
}

export const userProfile=(req,res)=>{
        const{id}=req.params
       const query=`select * from users where id=?`
       const values=[id]
        db.execute(query,values,(error,result)=>{
                if(error)
                return res.status(500).json({success:false,message:error.message})
        if(result.length==0)
                return res.status(404).json({message:'user not found profile by id' })
        return res.status(200).json({success:true,profile:result[0]})
})
}

export const userUpdate=(req,res)=>{
        const {id}=req.params;
        const {full_name}=req.body
        const query=`update users set full_name=? where id=?`
        const values=[full_name,id]
        db.execute(query,values,(err,result)=>{
          if(err)
        return res.status(500).json({success:false,message:err.message})
        if(result.affectedRows==0){
        return res.status(404).json({success:false,message:"not found user by id"})
        }else{
                return res.status(200).json({success:true,data:result.insertId})
        }

        })
      
}

export const userDelete=(req,res)=>{
        const {id}=req.params;
        const query=`delete from users where id=?`
        const values=[id]
        db.execute(query,values,(err,result)=>{
          if(err)
        return res.status(500).json({success:false,message:err.message})
        if(result.affectedRows==0){
        return res.status(404).json({success:false,message:"not fount user by id"})
        }else{
                return res.status(200).json({success:true,data:result[0]})
        }

        })
      
}