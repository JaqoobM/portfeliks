import './Transactions.scss';
import React from 'react';
import FiltersMobile from './FiltersMobile/FiltersMobile';
import AddTransactionModal from './AddTransactionModal/AddTransactionModal';
import Navigation from '../Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import {
	faEllipsisVertical,
	faMagnifyingGlass,
	faPlus,
	faGear,
	faRightFromBracket,
	faCartShopping,
	faSquareUpRight,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

function Transactions() {
	const [addModalIsOpen, setaddModalIsOpen] = useState(false);
	const [transactions, setTransactions] = useState([
		{
			date: '10.05.2024',
			name: 'Części do samochodu',
			price: '49,99',
			_id: 1,
		},
		{
			date: '21.04.2024',
			name: 'Lidl',
			price: '43,25',
			_id: 2,
		},
		{
			date: '15.04.2024',
			name: 'Biedronka',
			price: '22,11',
			_id: 3,
		},
		{
			date: '15.04.2024',
			name: 'Telefon',
			price: '999,99',
			_id: 4,
		},
		{
			date: '15.04.2024',
			name: 'Orange',
			price: '35',
			_id: 5,
		},
		{
			date: '27.03.2024',
			name: 'Zakupy',
			price: '100',
			_id: 6,
		},
		{
			date: '14.03.2024',
			name: 'Paliwo',
			price: '220,77',
			_id: 7,
		},
		{
			date: '05.03.2024',
			name: 'Książka',
			price: '55',
			_id: 8,
		},
		{
			date: '05.03.2024',
			name: 'Patelnia',
			price: '66,34',
			_id: 9,
		},
		{
			date: '05.03.2024',
			name: 'Netflix',
			price: '34,99',
			_id: 10,
		},
		{
			date: '05.03.2024',
			name: 'Fryzjer',
			price: '37',
			_id: 11,
		},
		{
			date: '23.02.2024',
			name: 'Buty',
			price: '250',
			_id: 12,
		},
		{
			date: '11.02.2024',
			name: 'Kurtka',
			price: '180',
			_id: 13,
		},
	]);
	const settingsBoxRef = useRef(null);

	const settingsMenuHandler = () => {
		settingsBoxRef.current.classList.toggle('settings-open');
	};

	const addModalHandler = (x) => {
		if (x === 'addBtn') {
			setTimeout(() => {
				setaddModalIsOpen(!addModalIsOpen);
			}, 50);
		} else {
			setaddModalIsOpen(!addModalIsOpen);
		}
	};

	return (
		<>
			{addModalIsOpen && (
				<AddTransactionModal addModalHandler={addModalHandler} />
			)}
			<Navigation />
			{/* TOP BAR */}
			<div className='top-bar-app'>
				<div className='top-bar-app__top-bar'>
					<button
						className='top-bar-app__settings-menu-btn'
						type='button'
						onClick={settingsMenuHandler}>
						<span className='top-bar-app__settings-menu-icon'>
							<FontAwesomeIcon icon={faEllipsisVertical} />
						</span>
						<div ref={settingsBoxRef} className='top-bar-app__settings-box'>
							<button className='top-bar-app__settings-btn'>
								<span className='top-bar-app__settings-icon'>
									<FontAwesomeIcon icon={faGear} />
								</span>
								<span className='top-bar-app__settings-text'>Ustawienia</span>
							</button>
							<span className='top-bar-app__settings-line'></span>
							<button className='top-bar-app__settings-btn'>
								<span className='top-bar-app__settings-icon'>
									<FontAwesomeIcon icon={faRightFromBracket} />
								</span>
								<span className='top-bar-app__settings-text'>Wyloguj</span>
							</button>
						</div>
					</button>
					<div className='top-bar-app__input-box'>
						<input
							className='top-bar-app__input'
							type='text'
							placeholder='Szukaj'></input>
						<span className='top-bar-app__input-icon'>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</span>
					</div>
				</div>
				<div className='top-bar-app__bottom-bar'>
					<div className='top-bar-app__cost-income-box'>
						<span className='top-bar-app__bottom-bar-icon top-bar-app__income-icon'>
							<FontAwesomeIcon icon={faSquareUpRight} />
						</span>
						<span className='top-bar-app__income'>
							2100
							<span className='top-bar-app__income-currency top-bar-app__currency'>
								zł
							</span>
						</span>

						<span className='top-bar-app__bottom-bar-icon top-bar-app__cost-icon'>
							<FontAwesomeIcon icon={faSquareUpRight} />
						</span>
						<span className='top-bar-app__cost'>
							1500
							<span className='top-bar-app__cost-currency top-bar-app__currency'>
								zł
							</span>
						</span>
					</div>
					<div className='top-bar-app__balance-box'>
						<span className='top-bar-app__balance-icon'>
							<FontAwesomeIcon icon={faPlus} />
						</span>
						<span className='top-bar-app__balance'>
							600
							<span className='top-bar-app__balance-currency top-bar-app__currency'>
								zł
							</span>
						</span>
					</div>
				</div>
			</div>
			{/* BOTTOM BUTTONS */}
			<div className='transaction-btns'>
				<button
					className='transaction-btns__btn transaction-btns__plan-btn'
					type='button'>
					<div className='transaction-btns__text-box'>
						<span className='transaction-btns__text'>Transakcje</span>
						<span className='transaction-btns__text'>zaplanowane</span>
					</div>
					<span className='transaction-btns__icon'>
						<FontAwesomeIcon icon={faCalendar} />
					</span>
				</button>
				<button
					className='transaction-btns__btn transaction-btns__add-btn'
					type='button'
					onClick={addModalHandler}>
					<div className='transaction-btns__text-box'>
						<span className='transaction-btns__text'>Dodaj</span>
						<span className='transaction-btns__text'>transakcję</span>
					</div>
					<span className='transaction-btns__icon'>
						<FontAwesomeIcon icon={faPlus} />
					</span>
				</button>
			</div>
			<FiltersMobile />
			{/* TRANSACTIONS */}
			<div className='transactions'>
				{transactions.map((transaction) => {
					let isDifferent;
					let isFirst;
					let isBetween;
					let isLast;

					const index = transactions.findIndex((el) => {
						return el === transaction;
					});

					if (
						transactions[index - 1]?.date !== transactions[index]?.date &&
						transactions[index]?.date === transactions[index + 1]?.date
					) {
						isDifferent = true;
						isFirst = true;
					} else if (
						transactions[index - 1]?.date !== transactions[index]?.date
					) {
						isDifferent = true;
					} else if (
						transactions[index - 1]?.date === transactions[index + 1]?.date
					) {
						isBetween = true;
					} else if (
						transactions[index]?.date !== transactions[index + 1]?.date
					) {
						isLast = true;
					}

					// if (transactions[index]?.date !== transactions[index - 1]?.date) {
					// 	isDifferent = true;
					// }

					// if (transactions[index]?.date === transactions[index + 1]?.date) {
					// 	isFirst = true;
					// }

					// if (transactions[index - 1]?.date === transactions[index + 1]?.date) {
					// 	isBetween = true;
					// }

					// if (transactions[index]?.date !== transactions[index + 1]?.date) {
					// 	isLast = true;
					// }

					return (
						<React.Fragment key={transaction._id}>
							{transaction === transactions[0] || isDifferent ? (
								<>
									<span className='transactions__date'>{transaction.date}</span>

									<div
										className={`transactions__transaction ${
											isFirst ? 'transaction-first-border' : ''
										}`}>
										<span className='transactions__icon-bg'>
											<span className='transactions__icon'>
												<FontAwesomeIcon icon={faCartShopping} />
											</span>
										</span>

										<div className='transactions__title-container'>
											<span className='transactions__title'>
												{transaction.name}
											</span>
											<span className='transactions__price'>
												{transaction.price}
												<span className='transactions__price-ending'>zł</span>
											</span>
										</div>
									</div>
								</>
							) : (
								<div
									className={`transactions__transaction ${
										isBetween ? 'transaction-between-border' : ''
									} ${isLast ? 'transaction-last-border' : ''}`}>
									<span className='transactions__icon-bg'>
										<span className='transactions__icon'>
											<FontAwesomeIcon icon={faCartShopping} />
										</span>
									</span>

									<div className='transactions__title-container'>
										<span className='transactions__title'>
											{transaction.name}
										</span>
										<span className='transactions__price'>
											{transaction.price}
											<span className='transactions__price-ending'>zł</span>
										</span>
									</div>
								</div>
							)}
						</React.Fragment>
					);
				})}
				{/* <div className='transactions__container'>
					<span className='transactions__date'>12.07.2024</span>
					<div className='transactions__transaction'>
						<span className='transactions__icon-bg'>
							<span className='transactions__icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</span>

						<div className='transactions__title-container'>
							<span className='transactions__title'>
								Książka - A co ciebie obchodzi co myślą inni?
							</span>
							<span className='transactions__price'>
								5,78<span className='transactions__price-ending'>zł</span>
							</span>
						</div>
					</div>
				</div> */}
			</div>
			<div className='page-bg'></div>
		</>
	);
}

export default Transactions;
