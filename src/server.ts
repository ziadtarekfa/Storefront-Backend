import productHanlder from "./handlers/productHandler";
import userHandler from "./handlers/userHandler";
import orderHanlder from './handlers/orderHandler';
import orderProductsHandler from './handlers/orderProductsHandler';
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(bodyParser.json());

app.use('/orders', orderHanlder);
app.use('/products', productHanlder);
app.use('/users', userHandler);
app.use('/ordered-products', orderProductsHandler);


app.get('/', (_req: express.Request, res: express.Response): void => {
    res.send('Hello World!')
})

app.listen(process.env.SERVER_PORT, (): void => {
    console.log(`Listen for requests on localhost port 5050`);
})

export default app;