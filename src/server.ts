import express from "express";
import productRoutes from "./routes/productRoutes";

const app = express();



app.use('/products', productRoutes);

app.get('/', (_req: express.Request, res: express.Response): void => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log(`Listen for requests on localhost port 3000`);
})
