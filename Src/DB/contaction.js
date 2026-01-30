import mysql2 from "mysql2"
export const db =mysql2.createConnection({
     host: "127.0.0.1",
        user: "sayed",
        password: "sayed2468,,,,",
        database:"blog_app"
})

db.connect((err)=>{
        if(err)
                return console.log("falied connent to DB");
        else{
                return console.log("DB Success Connect");       
        }   
})