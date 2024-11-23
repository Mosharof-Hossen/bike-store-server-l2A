import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/orders', OrderController.createOrder);

export const orderRouter = router;
