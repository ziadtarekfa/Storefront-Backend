import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import express from "express";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.get('/', (_req: express.Request, res: express.Response): void => {
    res.send('Hello World!')
})

app.listen(3000, (): void => {
    console.log(`Listen for requests on localhost port 3000`);
})
