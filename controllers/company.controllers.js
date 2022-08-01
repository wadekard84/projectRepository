const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");


exports.postcompany = async (req,res) =>{

    console.log(req.body)
    const {name,location,manpower}= req.body

    let sql = `insert into company (name,location,manpower) values ("${name}","${location}","${manpower}")`

    conn.query(sql,(err,rows)=>{
        if(err)throw err
        res.send (rows)
    })
}

exports.getcompany = async(req,res)=>{

    console.log(req.body)
    let sql = "select * from company"
    conn.query(sql,(err,rows)=>{
        if (err) throw err
        res.send(rows)
    })
}

exports.getcompany1 =async(req,res)=>{
    console.log(req.body)

    

    let sql = `select * from company where id = ${req.params.id}`

    conn.query(sql,(err,data)=>
    {
        if(err)throw err
        res.send(data)
    })
}

exports.deletecompany = async (req,res)=>{
    
     var sql = `delete from company where id = ${req.params.id}`

     conn.query(sql,(err,data)=>{
        if(err)throw err
        res.send(data)
     })

     
}

exports.putcompany =async(req,res)=>{
    
    const{id}=req.params
    const{name,location,manpower}=req.body
    var sql=`update company set name ="${name}", location="${location}", manpower="${manpower}" where id="${id}"`

    conn.query(sql,(err,data)=>{
        if(err)throw err
        res.send(data)
    })
}
// hash method
exports.hashing = async(req,res)=>{
    console.log=req.body
    const{username,password}=req.body

    let hash_password = await bcrypt.hash(password,10);

    let sql = `insert into hashmethod (username,password)values ("${username}","${hash_password}")`

    conn.query(sql,(err,rows)=>{
        if(err)throw err
        res.send(rows)
    })
}
// for compare password & token method
exports.login = (req,res)=>{
    

    const {username,password}=req.body

    let sql = `select * from hashmethod where username ="${username}"`

    conn.query(sql,async(err,rows)=>{
        if(err)throw err
// compare method
            const compare_password = await bcrypt.compare(password,rows[0].password)
            if(compare_password){
                // token method
                delete rows[0].password
      
                let token= jwt.sign({rows},process.env.SECRET_KEY,{ expiresIn: '2h' });
                console.log(token);
                res.cookie('dhananjay', token, { httpOnly: true });
                res.send(rows)
            }else{
            res.send(err)
            
            }
        })
    }
            