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
    const queryData = req.query.searchTerm as string | undefined;
    let query = {};
    if (queryData) {
      query = {
        $or: [
          { name: { $regex: queryData, $options: 'i' } },
          { brand: { $regex: queryData, $options: 'i' } },
          { category: { $regex: queryData, $options: 'i' } },
        ],
      };
    }
    // console.log(queryData);
    const result = await bikeServices.getAllBikes(query);
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
const getSingleBike = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await bikeServices.getSingleBike(id);
    res.status(200).json({
      status: true,
      message: 'Bike Retrieved successfully',
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
const updateBike = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await bikeServices.updateBike(id, updatedData);
    res.status(200).json({
      status: true,
      message: 'Bike updated successfully',
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
const deleteBike = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await bikeServices.deleteBike(id);
    res.status(200).json({
      status: true,
      message: 'Bike deleted successfully',
      data: {},
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
  getSingleBike,
  updateBike,
  deleteBike,
};
