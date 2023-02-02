import jwt from "jsonwebtoken";
import express from "express"

// res.send() and next() are not Javascript flow control. If you want to stop further 
//processing of the request in your function, you need to code that with traditional 
//Javascript flow control such as return, if/else, etc... to prevent the rest of your 
//code from continuing to run or process the request.

const verifyToken = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authorizationHeader = req.headers['authorization'];

    if (authorizationHeader == undefined) {
        res.send("Token not sent");
        return;
    }

    const providedToken = authorizationHeader?.split(' ')[1];

    await jwt.verify(providedToken as string, process.env.TOKEN_SECRET as string, (err) => {
        if (err) {
            res.send("Invalid Token");
        }
        else {
            next();
        }

    });
}


export default verifyToken;