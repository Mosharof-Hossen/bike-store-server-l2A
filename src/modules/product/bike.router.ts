import express from 'express';
import { BikeController } from './bike.controller';

const router = express.Router();

router.post('/products', BikeController.createBikeItem);
router.get('/products', BikeController.getAllBikes);

export const BikeRouter = router;
