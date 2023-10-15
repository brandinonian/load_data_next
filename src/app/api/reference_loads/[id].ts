import dbConnect from "@/app/_lib/dbConnect"
import ReferenceLoad from "@/app/_models/referenceLoad"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const {
      query: { id },
      method,
    } = req
  
    await dbConnect();
  
    switch (method) {
      case 'GET' /* Get a model by its ID */:
        try {
          const load = await ReferenceLoad.findById(id);
          if (!load) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: load });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break
  
      case 'PUT' /* Edit a model by its ID */:
        try {
          const load = await ReferenceLoad.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
          })
          if (!load) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: load });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break
  
      case 'DELETE' /* Delete a model by its ID */:
        try {
          const deletedLoad = await ReferenceLoad.deleteOne({ _id: id });
          if (!deletedLoad) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: {} });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break
  
      default:
        res.status(400).json({ success: false });
        break
    }
  }