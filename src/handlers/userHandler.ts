import bodyParser from "body-parser";
import express from "express";
import { UserStore } from "../models/userModel";
import verifyToken from "../middleware/verifyToken";

const routes = express.Router();

const store = new UserStore();

const jsonParser = bodyParser.json();
routes.get('/', verifyToken, (_req, res) => {
    store.index().then((data) => {
        res.status(200).send(data);
    });
});
routes.get('/:id', verifyToken, (req, res) => {
    store.show(parseInt(req.params.id)).then((data) => {
        res.status(200).send(data);
    });
});
routes.post('/create', jsonParser, (req, res) => {
    const user = req.body;
    store.create(user).then((data) => {
        console.log(data);
        res.status(200).json(data);
    });
});




export default routes;
