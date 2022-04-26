const mysql = require("mysql2")

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"myCollage"
})

connection.connect((err)=>{
    if(err){
       return console.log("Error" + err.message)
    }else{
        console.log("Success")
    }
})
connection.execute("SELECT * FROM students", (err,result)=>{
    console.log(err)
    console.log(result)

})

const student = [2,"oleg","Asinon","wsd34",3,"mecnat"]
const sql= "INSERT INTO students VALUE(?,?,?,?,?,?)"

connection.execute(sql,student,(err,result)=>{
    if(err){
        return console.log("Error")
    }else{
        console.log("Success")
    }
})