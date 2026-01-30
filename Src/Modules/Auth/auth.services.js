import { db } from "../../DB/contaction";
export const userRegister=(req,res)=>{
        const {full_name,email,password,DOB}=req.body;
        const findQuery=`select email from users where email=?`
        const valueEmail=[email]
        db.execute(findQuery,valueEmail,(err,result)=>{
                if(err)
                return res.status(500).json({success:false,Message:err.message})
        if(result.length>0)
        return res.status(409).json({success:false,message:"user alerady exits"});else{
     const insert=`insert into  users(full_name,email,password,DOB) values(?,?,?,?)`
        const values=[full_name,email,password,DOB];
        db.execute(insert,values,(err,result)=>{
               if(err) return res.status(500).json({message:err.message})
                return res.status(201).json({success:true,user:result.insertId})
        })

       }
        })
        
      }

export const userLogin=(req, res) => {
    const { email, password } = req.body;
    const query = `SELECT email , password FROM users WHERE email=? AND password=?`;
    const values = [email, password];
    db.execute(query, values, (err, result) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        // لو مفيش نتايج يبقى الايميل أو الباسورد غلط
        if (result.length ===0){
            return res.status(401).json({ success: false, message: "Email or password incorrect" });
        }
        // لو وصل هنا يبقى صح
        return res.status(200).json({ success: true, user: result });
    });
}