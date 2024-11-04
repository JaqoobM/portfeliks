import './AddTransactionModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

export default function AddTransactionModal(props) {
	const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const date = new Date();
	const year = date.getFullYear();
	const month = numbersArr.includes(date.getMonth() + 1)
		? `0${date.getMonth() + 1}`
		: date.getMonth() + 1;
	const day = numbersArr.includes(date.getDate())
		? `0${date.getDate()}`
		: date.getDate();

	const actualDate = `${year}-${month}-${day}`;

	const [editNameValue, setEditNameValue] = useState(
		props.editedTransaction.name
	);
	const [editAmountValue, setEditAmountValue] = useState(
		props.editedTransaction.amount
	);
	const [editDateValue, setEditDateValue] = useState(
		props.editedTransaction.date.split('.').reverse().join('-')
	);

	const [addDateValue, setAddDateValue] = useState(actualDate);

	const changeHandler = (e, element) => {
		if (element === 'name') {
			setEditNameValue(e.target.value);
		} else if (element === 'amount') {
			setEditAmountValue(e.target.value);
		} else if (element === 'addDate') {
			setAddDateValue(e.target.value);
		} else {
			setEditDateValue(e.target.value);
		}
	};

	const addNameRef = useRef(null);
	const addAmountRef = useRef(null);
	const addDateRef = useRef(null);

	const addHandler = (e) => {
		const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
		let result = '';
		for (let i = 0; i < 24; i++) {
			const index = Math.floor(Math.random() * characters.length);
			result += characters[index];
		}

		props.addTransactionData({
			name: addNameRef.current.value,
			amount: addAmountRef.current.value,
			date: addDateRef.current.value,
			customId: result,
		});
	};

	const editHandler = () => {
		props.editTransactionData({
			_id: props.editedTransaction._id,
			name: editNameValue,
			amount: editAmountValue,
			date: editDateValue,
			customId: props.editedTransaction.customId,
		});
	};

	return (
		<>
			{props.addModalIsOpen ? (
				// ADD MODAL
				<div className='add-transaction'>
					<button
						type='button'
						className='add-transaction__close-btn'
						onClick={props.modalHandler}>
						<span className='add-transaction__close-icon'>
							<FontAwesomeIcon icon={faCircleXmark} />
						</span>
					</button>
					<span className='add-transaction__title'>Dodaj transakcję</span>
					<div className='add-transaction__input-box'>
						<label htmlFor='name' className='add-transaction__label'>
							Nazwa
						</label>
						<input
							ref={addNameRef}
							id='name'
							className='add-transaction__input'></input>
					</div>
					<div className='add-transaction__input-box'>
						<span className='add-transaction__input-currency'>zł</span>
						<label htmlFor='amount' className='add-transaction__label'>
							Kwota
						</label>
						<input
							ref={addAmountRef}
							id='amount'
							className='add-transaction__input add-transaction__input-amount'></input>
					</div>
					<div className='add-transaction__btns-box'>
						<button
							className='add-transaction__btns add-transaction__cost-btn'
							type='button'>
							Koszt
						</button>
						<button
							className='add-transaction__btns add-transaction__income-btn'
							type='button'>
							Przychód
						</button>
					</div>
					<div className='add-transaction__date-box'>
						<label className='add-transaction__date-label'>Data</label>
						<input
							ref={addDateRef}
							className='add-transaction__date-input'
							type='date'
							value={addDateValue}
							onChange={(e) => {
								changeHandler(e, 'addDate');
							}}></input>
					</div>
					<button className='add-transaction__list-btn' type='button'>
						Brak kategorii
						<span className='add-transaction__list-btn-span'>Kategoria</span>
						<span className='add-transaction__list-btn-chevron'>
							<FontAwesomeIcon icon={faChevronDown} />
						</span>
					</button>
					<button className='add-transaction__list-btn' type='button'>
						Domyślny
						<span className='add-transaction__list-btn-span'>Portfel</span>
						<span className='add-transaction__list-btn-chevron'>
							<FontAwesomeIcon icon={faChevronDown} />
						</span>
					</button>
					<button
						className='add-transaction__add-btn'
						onClick={() => {
							props.modalHandler('addModalBtn');
							addHandler();
						}}>
						Dodaj
					</button>
				</div>
			) : (
				// EDIT MODAL
				<div className='add-transaction'>
					<button
						type='button'
						className='add-transaction__close-btn'
						onClick={props.modalHandler}>
						<span className='add-transaction__close-icon'>
							<FontAwesomeIcon icon={faCircleXmark} />
						</span>
					</button>
					<span className='add-transaction__title'>Edytuj transakcję</span>
					<div className='add-transaction__input-box'>
						<label htmlFor='name' className='add-transaction__label'>
							Nazwa
						</label>
						<input
							onChange={(e) => {
								changeHandler(e, 'name');
							}}
							id='name'
							className='add-transaction__input'
							value={editNameValue}></input>
					</div>
					<div className='add-transaction__input-box'>
						<span className='add-transaction__input-currency'>zł</span>
						<label htmlFor='amount' className='add-transaction__label'>
							Kwota
						</label>
						<input
							onChange={(e) => {
								changeHandler(e, 'amount');
							}}
							id='amount'
							className='add-transaction__input add-transaction__input-amount'
							value={editAmountValue}></input>
					</div>
					<div className='add-transaction__btns-box'>
						<button
							className='add-transaction__btns add-transaction__cost-btn'
							type='button'>
							Koszt
						</button>
						<button
							className='add-transaction__btns add-transaction__income-btn'
							type='button'>
							Przychód
						</button>
					</div>
					<div className='add-transaction__date-box'>
						<label className='add-transaction__date-label'>Data</label>
						<input
							className='add-transaction__date-input'
							type='date'
							value={editDateValue}
							onChange={(e) => {
								changeHandler(e);
							}}></input>
					</div>
					<button className='add-transaction__list-btn' type='button'>
						Brak kategorii
						<span className='add-transaction__list-btn-span'>Kategoria</span>
						<span className='add-transaction__list-btn-chevron'>
							<FontAwesomeIcon icon={faChevronDown} />
						</span>
					</button>
					<button className='add-transaction__list-btn' type='button'>
						Domyślny
						<span className='add-transaction__list-btn-span'>Portfel</span>
						<span className='add-transaction__list-btn-chevron'>
							<FontAwesomeIcon icon={faChevronDown} />
						</span>
					</button>
					<button
						className='add-transaction__add-btn'
						onClick={() => {
							props.modalHandler('addModalBtn');
							editHandler();
						}}>
						Zapisz
					</button>
					<button
						className='add-transaction__add-btn add-transaction__delete-btn'
						onClick={() => {
							props.modalHandler('addModalBtn');
							props.deleteTransactionData();
						}}>
						Usuń
					</button>
				</div>
			)}
		</>
	);
}
