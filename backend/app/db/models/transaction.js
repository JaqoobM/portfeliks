import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
	name: {
		type: String,
	},
	amount: {
		type: String,
	},
	date: {
		type: Date,
	},
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
