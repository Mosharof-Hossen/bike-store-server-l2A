import { Request, Response } from 'express';
import { bikeServices } from './bike.service';
import bikeValidationSchema from './bike.zod.validation';
import config from '../../config';

const createBikeItem = async (req: Request, res: Response) => {
  try {
    const bikeData = req.body;
    const zodParseData = bikeValidationSchema.parse(bikeData);
    const result = await bikeServices.createBikeItem(zodParseData);
    res.status(200).json({
      success: true,
      message: 'Bike Created successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message:
        err.name == 'ZodError' ? 'ValidationError' : 'Something went wrong',
      error: err,
      stack: config.node_env == 'development' ? err.stack : undefined,
    });
  }
};
const getAllBikes = async (req: Request, res: Response) => {
  try {
    const result = await bikeServices.getAllBikes();
    res.status(200).json({
      status: true,
      message: 'Bikes Retrieved successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
      stack: config.node_env == 'development' ? err.stack : undefined,
    });
  }
};

export const BikeController = {
  createBikeItem,
  getAllBikes,
};