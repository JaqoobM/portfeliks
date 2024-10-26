import './Transactions.scss';
import React from 'react';
import FiltersMobile from './FiltersMobile/FiltersMobile';
import AddTransactionModal from './AddTransactionModal/AddTransactionModal';
import CategoryModal from './CategoryModal/CategoryModal';
import Navigation from '../Navigation/Navigation';
import TransactionsList from './TransactionsList/TransactionsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import {
	faEllipsisVertical,
	faMagnifyingGlass,
	faPlus,
	faGear,
	faRightFromBracket,
	faSquareUpRight,
	faList,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';

function Transactions() {
	const [ModalIsOpen, setModalIsOpen] = useState(false);
	const [transactions, setTransactions] = useState([]);
	const [addModalIsOpen, setAddModalIsOpen] = useState(false);
	const [categoryModalIsOpen, setCategoryModalIsOpen] = useState(false);

	useEffect(() => {
		transactions.sort((a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);
			return dateB - dateA;
		});
	}, [transactions]);

	const formDataHandler = (formDataObj) => {
		setTransactions((prevTransactions) => [...prevTransactions, formDataObj]);
	};

	const categoryModalHandler = () => {
		setCategoryModalIsOpen(!categoryModalIsOpen);
	};

	const settingsBoxRef = useRef(null);

	const settingsMenuHandler = () => {
		settingsBoxRef.current.classList.toggle('settings-open');
	};

	const modalHandler = (x) => {
		if (x === 'addModalBtn') {
			setTimeout(() => {
				setModalIsOpen(false);
				setAddModalIsOpen(false);
			}, 100);
		} else if (x === 'addBtn') {
			setModalIsOpen(true);
			setAddModalIsOpen(true);
		} else if (x === 'editBtn') {
			setModalIsOpen(true);
		} else {
			setModalIsOpen(false);
			setAddModalIsOpen(false);
		}
	};

	return (
		<>
			{ModalIsOpen && (
				<AddTransactionModal
					addModalIsOpen={addModalIsOpen}
					modalHandler={modalHandler}
					formDataHandler={formDataHandler}
				/>
			)}
			<Navigation />
			{true && (
				<CategoryModal categoryModalHandler={categoryModalHandler} />
			)}
			{/* TOP BAR */}
			<div className='top-bar-app'>
				<div className='top-bar-app__top-bar'>
					<span
						className='top-bar-app__settings-menu-btn'
						type='button'
						onClick={settingsMenuHandler}>
						<span className='top-bar-app__settings-menu-icon'>
							<FontAwesomeIcon icon={faEllipsisVertical} />
						</span>
						<div ref={settingsBoxRef} className='top-bar-app__settings-box'>
							<button
								onClick={categoryModalHandler}
								className='top-bar-app__settings-btn'>
								<span className='top-bar-app__settings-icon'>
									<FontAwesomeIcon icon={faList} />
								</span>
								<span className='top-bar-app__settings-text'>Kategorie</span>
							</button>
							<span className='top-bar-app__settings-line'></span>
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
					</span>
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
					onClick={() => {
						modalHandler('addBtn');
					}}>
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
			<TransactionsList
				transactions={transactions}
				modalHandler={modalHandler}
			/>
			<div className='page-bg'></div>
		</>
	);
}

export default Transactions;
