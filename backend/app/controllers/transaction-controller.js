import Transaction from '../db/models/transaction.js';

class TransactionControler {
	async createTransaction(req, res) {
		const transaction = new Transaction({
			name: req.body.name,
			amount: req.body.amount,
			date: req.body.date,
			customId: req.body.customId,
		});

		try {
			await transaction.save();
			res.status(201).send('Zapisano transakcję');
		} catch (e) {
			console.log('Nie zapisano transakcji');
		}
	}

	async showTransactions(req, res) {
		const transactions = await Transaction.find({});
		res.json(transactions);
	}

	async editTransaction(req, res) {
		const id = req.body._id || req.body.customId;
		console.log(id);
		const transaction = await Transaction.findOne({ _id: id });
		transaction.name = req.body.name;
		transaction.amount = req.body.amount;
		transaction.date = req.body.date;

		try {
			await transaction.save();
			res.status(200).send('Zapisano edycje');
		} catch (e) {
			console.log('Nie zapisano edycji');
		}
	}
}

export default new TransactionControler();
