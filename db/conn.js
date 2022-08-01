const mysql =require("mysql");
exports.getDbConnection =function(){
    const conn = mysql.createConnection({
        host:process.env.HOST,
        user:process.env.USER,
        database:process.env.DATABASE,
        port:process.env.DBPORT,
        password:process.env.PASSWORD
    })
    conn.connect((err)=>{
        if(err)throw err
        global.conn=conn;
        console.log("conection is successfully")
    })
}