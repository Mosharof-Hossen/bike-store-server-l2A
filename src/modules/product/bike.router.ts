import express from 'express';
import { BikeController } from './bike.controller';

const router = express.Router();

router.post('/products', BikeController.createBikeItem);
router.get('/products', BikeController.getAllBikes);
router.get('/products/:id', BikeController.getSingleBike);

export const BikeRouter = router;
