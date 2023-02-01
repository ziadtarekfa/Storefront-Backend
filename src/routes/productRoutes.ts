import express from "express";
import { PhoneStore } from "../models/phone";

const router = express.Router();

const store = new PhoneStore();

router.get('/', (_req, res) => {
    store.index().then((data) => {
        res.send(data);
    });
});
router.get('/:id', (req, res) => {
    console.log(`params is = ${req.params.id}`);
    const id: number = parseInt(req.params.id)

    store.show(id).then((data) => {
        res.send(data);
    })
})

export default router;