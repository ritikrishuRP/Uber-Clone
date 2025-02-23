const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.authUser = async(req,res,next) => {
    const authHeader = req.headers.authorization;
    const token = req.cookies?.token || (authHeader && authHeader.split(' ')[1]);

    if(!token){
        return res.status(401).json({message: 'Unauthorized TNA'});
    }

    const isBlackListed = await userModel.findOne({ token: token});

    if(isBlackListed){
        return res.status(401).json({message: 'Unauthorized BT'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        req.user = user;

        return next();
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized G'})
    }
}
