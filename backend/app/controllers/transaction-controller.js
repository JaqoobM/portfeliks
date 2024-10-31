import Transaction from '../db/models/transaction.js';

class TransactionControler {
	async createTransaction(req, res) {
		const transaction = new Transaction({
			name: req.body.name,
			amount: req.body.amount,
			date: req.body.date,
		});

		try {
			await transaction.save();
		} catch (e) {
			console.log('Nie zapisało transakcji');
		}
	}
}

export default new TransactionControler();
