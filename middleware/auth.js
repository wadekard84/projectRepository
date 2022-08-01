const jwt = require("jsonwebtoken")

exports.authenticateJWT = async(req, res, next) => {
	
    const token = req.cookies.datta;
    
    if (token) {
        const user = await jwt.verify(token, process.env.SECRET_KEY)
            
            req.user = user;
            
            next(); 
        
    } else {
        res.send("token not send");
    }
}