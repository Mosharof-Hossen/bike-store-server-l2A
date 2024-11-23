import express, { Request, Response } from 'express';
import cors from 'cors';
import { BikeRouter } from './modules/product/bike.router';
import { orderRouter } from './modules/orders/order.router';

const app = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api', BikeRouter);
app.use('/api', orderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Server running....' });
});

export default app;
