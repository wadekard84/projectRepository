exports.post = async(req,res)=>{
    console.log(req.body)
    const{name,villege,home_member}=req.body

    let sql = `insert into govindpark (name,villege,home_member)values("${name}","${villege}","${home_member}")`

    conn.query(sql,(err,rows)=>{
        if(err)throw err
        res.send(rows)
    })
}

exports.get =async(req,res)=>{

    console.log(req.body)
    let sql ="select * from govindpark"

    conn.query(sql,(err,rows)=>{
        if(err)throw err
        res.send(rows)
    })
}

exports.getAll =async(req,res)=>{

    console.log(req.params.id)
    let sql =`select * from govindpark where id ="${req.params.id}"`

    conn.query(sql,(err,rows)=>{
        if(err)throw err
        res.send(rows)
    })
}

exports.delete= async(req,res)=>{
let sql = `delete from govindpark where id="${req.params.id}"`
conn.query(sql,(err,rows)=>{
if(err)throw err
res.send(rows)
})
}

exports.updateName =async(req,res)=>{
    const{id}=req.params
    const{name,villege,home_member}=req.body

    let sql = `update govindpark set name="${name}", villege="${villege}",home_member="${home_member}"where id= "${id}"`

    conn.query(sql,(err,rows)=>{
        if(err)throw err
        res.send(rows)
    })
}
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.hashmethod = async(req,res)=>{
    console.log=req.body
    const{name,password}=req.body
    let hash_password= await bcrypt.hash(password,10);

    let sql = `insert into hashpassword (name,password)values("${name}","${hash_password}")`

    conn.query(sql,(err,rows)=>{
        if(err)throw err
        res.send(rows)
    })

}

exports.compare =(req,res)=>{
    const {name,password}=req.body

    let sql =`select * from hashpassword where name ="${name}"`;
    conn.query(sql,async(err,rows)=>{
        if(err)throw err

         const compare_password = await bcrypt.compare(password,rows[0].password)
         if(compare_password){

            // token method
        //     delete rows[0].password
        //     let token =jwt.sign({rows},process.env.SECRET_KEY,{expressionIn:'1h'})
        
        // console.log(token);
        // res.cookie('datta',token,{httpOnly:true})
        res.send(rows)
        }
            else{
                res.send(err)
            }
    })
}