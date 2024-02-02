import express from 'express';
import { creatListing } from '../controllers/listing.controller';
import { verifyToken } from '../utils/verifyUser';

const router = express.Router();

router.post('/create',verifyToken, creatListing);

export default router;