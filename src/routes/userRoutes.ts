import bodyParser from "body-parser";
import express from "express";
import jwt from "jsonwebtoken";
import { UserStore } from "../models/user";

const routes = express.Router();

const store = new UserStore();

const jsonParser = bodyParser.json();
routes.get('/', authenticateToken, (_req, res) => {
    store.index("").then((data) => {
        res.send(data);
    });
});
routes.get('/:id', authenticateToken, (req, res) => {
    store.show("", parseInt(req.params.id)).then((data) => {
        res.send(data);
    });
});
routes.post('/create', jsonParser, (req, res) => {
    const user = req.body;
    store.create(user).then((data) => {
        res.status(200).json({ "token": data });
    });
});

function authenticateToken(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const authHeader = req.headers['authorization'];
    const providedToken = authHeader?.split(' ')[1];

    if (providedToken == null || providedToken == undefined) {
        res.status(401).send("Token not sent");
    }
    else {
        jwt.verify(providedToken as string, process.env.TOKEN_SECRET as string, (err) => {
            if (err) {
                res.status(403).send("Invalid Token");
            }
            else {
                next();
            }

        });
    }



}



export default routes;
