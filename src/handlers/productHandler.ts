import express from "express";
import { ProductStore } from "../models/productModel";
import verifyToken from "../middleware/verifyToken";

const router = express.Router();


const store = new ProductStore();

router.get('/', (_req, res) => {
    store.index().then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.send("Unable to get all products due to " + err);
    });
});

router.get('/:id', (req, res) => {

    const id: number = parseInt(req.params.id)
    store.show(id).then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.send(`Unable to get product with id ${id} due to ${err}`);
    });
});

router.post('/create', verifyToken, (req, res) => {

    const product = req.body;
    store.create(product).then((data) => {
        console.log(data);
        res.status(200).json(data);
    }).catch((err) => {
        res.send(`Unable to create product due to ${err}`);
    });
});

export default router;