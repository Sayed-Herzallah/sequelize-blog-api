import { authRouter } from './Modules/Auth/auth.controller';
import { userRouter } from './Modules/Users/user.controller';
import { blogRouter } from './Modules/Blog/blog.controller';
const bootstrap=function(app,express){
    
// ------------------------------------------   AUTH  ----------------------------------------------- //
app.use("/auth",authRouter)

// ------------------------------------------------    USERS ------------------------------------------------------------ //

app.use("/users",userRouter)


// ---------------------------- Blog--------------------------------//
app.use("/blog",blogRouter)

// not found handel
app.all("*",(req,res)=>{
        return res.status(404).json({message:"not found "})
})


}
export default bootstrap