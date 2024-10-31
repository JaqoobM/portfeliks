import express from 'express';
const router = express.Router();
import transactionControler from '../controllers/transaction-controller.js';

router.route('/api/transakcje').post(transactionControler.createTransaction);

export default router;
 