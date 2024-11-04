import express from 'express';
const router = express.Router();
import transactionControler from '../controllers/transaction-controller.js';

router
	.route('/api/transakcje')
	.post(transactionControler.createTransaction)
	.get(transactionControler.showTransactions)
	.put(transactionControler.editTransaction);
	
router
	.route('/api/transakcje/:id')
	.delete(transactionControler.deleteTransaction);
export default router;
