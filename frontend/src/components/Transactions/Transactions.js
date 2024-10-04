import './Transactions.scss';
import Navigation from '../Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import {
	faEllipsisVertical,
	faMagnifyingGlass,
	faPlus,
	faChevronRight,
	faGear,
	faRightFromBracket,
	faCalendarDays,
	faArrowDownShortWide,
	faList,
	faWallet,
	faCartShopping,
	faArrowLeft,
	faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Transactions() {
	let filters;
	let filterBar1;
	let filterBar2;
	let filterBar3;
	let settingsBox;
	let categoryDatePage;
	let categoryDateBackBtn;
	let monthsList;
	let monthBtnChevron;
	let monthsFilterBtn;
	let yearsFilterBtn;

	useEffect(() => {
		filters = document.querySelector('#transactionsFilters');
		filterBar1 = document.querySelector('#filterBar1');
		filterBar2 = document.querySelector('#filterBar2');
		filterBar3 = document.querySelector('#filterBar3');
		settingsBox = document.querySelector('#settingsBox');
		categoryDatePage = document.querySelector('#categoryDatePage');
		categoryDateBackBtn = document.querySelector('#categoryDateBackBtn');
		monthsList = document.querySelector('#monthsList');
		monthBtnChevron = document.querySelector('#monthBtnChevron');
		monthsFilterBtn = document.querySelector('#monthsFilterBtn');
		yearsFilterBtn = document.querySelector('#yearsFilterBtn');
	});
	const filtersMenuHandler = () => {
		filters?.classList.toggle('filters-activated');
		filterBar1?.classList.toggle('filter-bar1-x');
		filterBar2?.classList.toggle('filter-bar2-x');
		filterBar3?.classList.toggle('filter-bar3-x');
		categoryDatePage.classList.remove('category-date-activated');
	};

	const settingsMenuHandler = () => {
		settingsBox.classList.toggle('settings-open');
	};

	const filtersHandler = (category) => {
		switch (category) {
			case 'date':
				categoryDatePage.classList.add('category-date-activated');
				break;

			default:
				break;
		}
	};

	const backBtnHandler = () => {
		categoryDatePage.classList.remove('category-date-activated');
	};

	const dateFiltersHandler = (data) => {
		if (data === 'months') {
			monthsList?.classList.toggle('months-activated');
			monthBtnChevron?.classList.toggle('chevron-rotated');
			monthsFilterBtn?.classList.toggle('month-btn-border');
		} else if (data === 'years') {
			monthsList?.classList.toggle('months-activated');
			yearsFilterBtn.firstChild?.classList.toggle('chevron-rotated');
			yearsFilterBtn?.classList.toggle('month-btn-border');
		}
	};

	return (
		<>
			<Navigation />
			{/* TOP BAR */}
			<div className='top-bar-app'>
				<button
					className='top-bar-app__settings-menu-btn'
					type='button'
					onClick={settingsMenuHandler}>
					<span className='top-bar-app__settings-menu-icon'>
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</span>
					<div id='settingsBox' className='top-bar-app__settings-box'>
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
					type='button'>
					<div className='transaction-btns__text-box'>
						<span className='transaction-btns__text'>Dodaj</span>
						<span className='transaction-btns__text'>transakcję</span>
					</div>
					<span className='transaction-btns__icon'>
						<FontAwesomeIcon icon={faPlus} />
					</span>
				</button>
			</div>
			{/* BURGER MENU FILTERS*/}
			<button
				className='top-bar-app__burger-btn'
				type='button'
				onClick={filtersMenuHandler}>
				<span
					id='filterBar1'
					className='top-bar-app__burger-bar top-bar-app__burger-bar1'></span>
				<span
					id='filterBar2'
					className='top-bar-app__burger-bar top-bar-app__burger-bar2'></span>
				<span
					id='filterBar3'
					className='top-bar-app__burger-bar top-bar-app__burger-bar3'></span>
			</button>

			{/* FILTERS */}
			<div className='transactions-filters'>
				<div
					id='categoryDatePage'
					className='transactions-filters__category-date'>
					{/* BACK BTN */}
					<button
						id='categoryDateBackBtn'
						className='transactions-filters__date-back-arrow-btn'
						type='button'
						onClick={backBtnHandler}>
						<span className='transactions-filters__date-arrow'>
							<FontAwesomeIcon icon={faArrowLeft} />
						</span>
					</button>
					{/* MONTHS BTN */}
					<button
						id='monthsFilterBtn'
						className='transactions-filters__date-btns'
						type='button'
						onClick={() => dateFiltersHandler('months')}>
						Październik
						<span
							id='monthBtnChevron'
							className='transactions-filters__date-btns-arrow'>
							<FontAwesomeIcon icon={faChevronDown} />
						</span>
						<span className='transactions-filters__date-btns-label'>
							Miesiąc
						</span>
						<ul
							id='monthsList'
							className='transactions-filters__date-btns-lists'>
							<li className='transactions-filters__date-btns-list-el'>
								Wrzesień (2024)
							</li>
							<li className='transactions-filters__date-btns-list-el'>
								Sierpień (2024)
							</li>
							<li className='transactions-filters__date-btns-list-el'>
								Lipiec (2024)
							</li>
							<li className='transactions-filters__date-btns-list-el'>
								Czerwiec (2024)
							</li>
						</ul>
					</button>

					<button
						id='yearFilterBtn'
						className='transactions-filters__date-btns'
						type='button'
						onClick={() => dateFiltersHandler('years')}>
						2024
						<span
							id='yearsBtnChevron'
							className='transactions-filters__date-btns-arrow'>
							<FontAwesomeIcon icon={faChevronDown} />
						</span>
						<span className='transactions-filters__date-btns-label'>Rok</span>
						<ul
							id='yearsList'
							className='transactions-filters__date-btns-lists'>
							<li className='transactions-filters__date-btns-list-el'>2023</li>
							<li className='transactions-filters__date-btns-list-el'>2022</li>
							<li className='transactions-filters__date-btns-list-el'>2021</li>
							<li className='transactions-filters__date-btns-list-el'>2020</li>
						</ul>
					</button>
				</div>
				{/* FILTERS MENU */}
				<div
					id='transactionsFilters'
					className='transactions-filters__container'>
					<span className='transactions-filters__title'>Filtry</span>
					<button
						id='dateFilterBtn'
						className='transactions-filters__btn transactions-filters__date-btn'
						type='button'
						onClick={() => {
							filtersHandler('date');
						}}>
						<div>
							<span className='transactions-filters__text-btn'>Okres</span>
							<span className='transactions-filters__icon'>
								<FontAwesomeIcon icon={faCalendarDays} />
							</span>
						</div>
						<span className='transactions-filters__arrow'>
							<FontAwesomeIcon icon={faChevronRight} />
						</span>
					</button>
					<div className='transactions-filters__text-box'>
						<ul className='transactions-filters__text'>
							<li>Obecny miesiąc</li>
						</ul>
					</div>
					<button
						id='sortFilterBtn'
						className='transactions-filters__btn transactions-filters__sort-btn'
						type='button'
						onClick={filtersHandler('sort')}>
						<div>
							<span className='transactions-filters__text-btn'>Sortowanie</span>
							<span className='transactions-filters__icon'>
								<FontAwesomeIcon icon={faArrowDownShortWide} />
							</span>
						</div>
						<span className='transactions-filters__arrow'>
							<FontAwesomeIcon icon={faChevronRight} />
						</span>
					</button>
					<div className='transactions-filters__text-box'>
						<ul className='transactions-filters__text'>
							<li>Od najnowszych</li>
						</ul>
					</div>
					<button
						id='categoryFilterBtn'
						className='transactions-filters__btn transactions-filters__categories-btn'
						type='button'
						onClick={filtersHandler('category')}>
						<div>
							<span className='transactions-filters__text-btn'>Kategorie</span>
							<span className='transactions-filters__icon'>
								<FontAwesomeIcon icon={faList} />
							</span>
						</div>
						<span className='transactions-filters__arrow'>
							<FontAwesomeIcon icon={faChevronRight} />
						</span>
					</button>
					<div className='transactions-filters__text-box'>
						<ul className='transactions-filters__text'>
							<li>Wszystkie</li>
						</ul>
					</div>
					<button
						id='walletFilterBtn'
						className='transactions-filters__btn transactions-filters__wallet-btn'
						type='button'
						onClick={filtersHandler('wallet')}>
						<div>
							<span className='transactions-filters__text-btn'>Portfel</span>
							<span className='transactions-filters__icon'>
								<FontAwesomeIcon icon={faWallet} />
							</span>
						</div>
						<span className='transactions-filters__arrow'>
							<FontAwesomeIcon icon={faChevronRight} />
						</span>
					</button>
					<div className='transactions-filters__text-box'>
						<ul className='transactions-filters__text'>
							<li>Dostępne środki (3200zł)</li>
						</ul>
					</div>
				</div>
			</div>
			{/* TRANSACTIONS */}
			<div className='transactions'>
				<div className='transactions__container'>
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
				</div>
				<div className='transactions__container'>
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
				</div>
				<div className='transactions__container'>
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
				</div>
				<div className='transactions__container'>
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
				</div>
				<div className='transactions__container'>
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
				</div>
				<div className='transactions__container'>
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
				</div>
				<div className='transactions__container'>
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
				</div>
				<div className='transactions__container'>
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
				</div>
				<div className='transactions__container'>
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
				</div>
				<div className='transactions__container'>
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
				</div>
				<div className='transactions__container'>
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
				</div>
				<div className='transactions__container'>
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
				</div>
			</div>
			<div className='page-bg'></div>
		</>
	);
}

export default Transactions;
