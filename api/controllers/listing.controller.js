import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error"

export const creatListing = async (req, res, next) => { 
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        next(errorHandler)
    }
}