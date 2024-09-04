import express, {Request, Response} from 'express';
import routes from "./routes/routes.js";
import {errorHandler} from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use('/api/products', routes);
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});