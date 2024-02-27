import express from 'express';
import { getWindows, addItem, editItem } from '../controllers/window.js';

const router = express.Router();

router.get('/windows', getWindows);
router.post('/window/:id/add', addItem);
router.put('/window/:id/edit/:itemId', editItem);

export default router;
