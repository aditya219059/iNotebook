const jwt = require('jsonwebtoken');
const jwts = "nandu";

const fetchuser = (req, res, next) => {
    //Get user from the jwt token and add id to req object.
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send({error: "Please authenticate with valid token"});
    }
    try {
        const data = jwt.verify(token, jwts);
        req.user = data.user
        next();
        
    } catch (error) {
        res.status(401).send({error: "Please authencitcate using a valid token"});
    }
}

module.exports = fetchuser;