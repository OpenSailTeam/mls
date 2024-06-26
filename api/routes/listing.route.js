import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { getListings, createListing, deleteListing, updateListing, getListing } from '../controllers/listing.contoller.js';
import e from 'express';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing); 
router.get('/get', getListings); 
export default router;