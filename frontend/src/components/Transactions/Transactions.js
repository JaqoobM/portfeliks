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
import { useRef, useState, useEffect } from 'react';

function Transactions() {
	const [addModalIsOpen, setaddModalIsOpen] = useState(false);
	const [transactions, setFormData] = useState([]);

	useEffect(() => {
		transactions.sort((a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);
			return dateB - dateA;
		});
	}, [transactions]);

	const formDataHandler = (formDataObj) => {
		setFormData((prevTransactions) => [...prevTransactions, formDataObj]);
	};

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
				<AddTransactionModal
					addModalHandler={addModalHandler}
					formDataHandler={formDataHandler}
				/>
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
							type='search'
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
												{transaction.amount}
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
											{transaction.amount}
											<span className='transactions__price-ending'>zł</span>
										</span>
									</div>
								</div>
							)}
						</React.Fragment>
					);
				})}
			</div>
			<div className='page-bg'></div>
		</>
	);
}

export default Transactions;
