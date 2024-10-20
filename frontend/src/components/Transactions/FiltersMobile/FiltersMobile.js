import './FiltersMobile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import {
	faChevronRight,
	faCalendarDays,
	faArrowDownShortWide,
	faList,
	faWallet,
	faArrowLeft,
	faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

export default function FiltersMobile() {
	const filtersMenuRef = useRef(null);
	const burgerMenuBar1Ref = useRef(null);
	const burgerMenuBar2Ref = useRef(null);
	const burgerMenuBar3Ref = useRef(null);
	const categoryMenuPeriodRef = useRef(null);
	const categoryPeriodFilterMonthBtn = useRef(null);
	const categoryPeriodFilterYearBtn = useRef(null);
	const categoryPeriodFilterMonthsList = useRef(null);
	const categoryPeriodFilterYearsList = useRef(null);

	const filtersHandler = (category) => {
		switch (category) {
			case 'date':
				categoryMenuPeriodRef.current.classList.add('category-date-activated');
				break;

			default:
				break;
		}
	};

	const backBtnHandler = () => {
		categoryMenuPeriodRef.current.classList.remove('category-date-activated');
		categoryPeriodFilterMonthsList.current.classList.remove(
			'list-activated'
		);
		categoryPeriodFilterMonthBtn.current.firstChild.nextSibling.classList.remove(
			'chevron-rotated'
		);
		categoryPeriodFilterMonthBtn.current.classList.remove('month-btn-border');
		categoryPeriodFilterYearsList.current.classList.remove(
			'list-activated'
		);
		categoryPeriodFilterYearBtn.current.firstChild.nextSibling.classList.remove(
			'chevron-rotated'
		);
		categoryPeriodFilterYearBtn.current.classList.remove('month-btn-border');
	};

	const dateFiltersHandler = (data) => {
		if (data === 'months') {
			categoryPeriodFilterMonthsList.current.classList.toggle(
				'list-activated'
			);
			categoryPeriodFilterMonthBtn.current.firstChild.nextSibling.classList.toggle(
				'chevron-rotated'
			);
			categoryPeriodFilterMonthBtn.current.classList.toggle('month-btn-border');
			categoryPeriodFilterYearsList.current.classList.remove(
				'list-activated'
			);
			categoryPeriodFilterYearBtn.current.firstChild.nextSibling.classList.remove(
				'chevron-rotated'
			);
			categoryPeriodFilterYearBtn.current.classList.remove('month-btn-border');
		} else if (data === 'years') {
			categoryPeriodFilterYearsList.current.classList.toggle(
				'list-activated'
			);
			categoryPeriodFilterYearBtn.current.firstChild.nextSibling.classList.toggle(
				'chevron-rotated'
			);
			categoryPeriodFilterYearBtn.current.classList.toggle('month-btn-border');
			categoryPeriodFilterMonthsList.current.classList.remove(
				'list-activated'
			);
			categoryPeriodFilterMonthBtn.current.firstChild.nextSibling.classList.remove(
				'chevron-rotated'
			);
			categoryPeriodFilterMonthBtn.current.classList.remove('month-btn-border');
		}
	};

	const filtersMenuHandler = () => {
		filtersMenuRef.current.classList.toggle('filters-activated');
		burgerMenuBar1Ref.current.classList.toggle('filter-bar1-x');
		burgerMenuBar2Ref.current.classList.toggle('filter-bar2-x');
		burgerMenuBar3Ref.current.classList.toggle('filter-bar3-x');
		categoryMenuPeriodRef.current.classList.remove('category-date-activated');
	};

	return (
		<>
			<div className='transactions-filters'>
				<div
					ref={categoryMenuPeriodRef}
					className='transactions-filters__category-date'>
					{/* BACK BTN ARROW */}
					<button
						id='categoryDateBackBtn'
						className='transactions-filters__date-back-arrow-btn'
						type='button'
						onClick={backBtnHandler}>
						<span className='transactions-filters__date-arrow'>
							<FontAwesomeIcon icon={faArrowLeft} />
						</span>
					</button>
					{/* FILTER MONTHS BTN */}
					<button
						ref={categoryPeriodFilterMonthBtn}
						className='transactions-filters__date-btns'
						type='button'
						onClick={() => dateFiltersHandler('months')}>
						Październik
						<span className='transactions-filters__date-btns-arrow'>
							<FontAwesomeIcon icon={faChevronDown} />
						</span>
						<span className='transactions-filters__date-btns-label'>
							Miesiąc
						</span>
					</button>

					<ul
						ref={categoryPeriodFilterMonthsList}
						className='transactions-filters__date-btns-lists'>
						<li className='transactions-filters__date-btns-list-el'>
							Grudzień (2024)
						</li>
						<li className='transactions-filters__date-btns-list-el'>
							Listopad (2024)
						</li>
						<li className='transactions-filters__date-btns-list-el'>
							Październik (2024)
						</li>
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
						<li className='transactions-filters__date-btns-list-el'>
							Maj (2024)
						</li>
						<li className='transactions-filters__date-btns-list-el'>
							Kwiecień (2024)
						</li>
						<li className='transactions-filters__date-btns-list-el'>
							Marzec (2024)
						</li>
						<li className='transactions-filters__date-btns-list-el'>
							Luty (2024)
						</li>
						<li className='transactions-filters__date-btns-list-el'>
							Styczeń (2024)
						</li>
					</ul>

					{/* FILTER YEARS BTN */}
					<button
						ref={categoryPeriodFilterYearBtn}
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
					</button>
					<ul
						ref={categoryPeriodFilterYearsList}
						className='transactions-filters__date-btns-lists'>
						<li className='transactions-filters__date-btns-list-el'>2023</li>
						<li className='transactions-filters__date-btns-list-el'>2022</li>
						<li className='transactions-filters__date-btns-list-el'>2021</li>
						<li className='transactions-filters__date-btns-list-el'>2020</li>
					</ul>
				</div>
				{/* FILTERS MENU */}
				<div ref={filtersMenuRef} className='transactions-filters__container'>
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
				<button
					className='top-bar-app__burger-btn'
					type='button'
					onClick={filtersMenuHandler}>
					<span
						ref={burgerMenuBar1Ref}
						className='top-bar-app__burger-bar top-bar-app__burger-bar1'></span>
					<span
						ref={burgerMenuBar2Ref}
						className='top-bar-app__burger-bar top-bar-app__burger-bar2'></span>
					<span
						ref={burgerMenuBar3Ref}
						className='top-bar-app__burger-bar top-bar-app__burger-bar3'></span>
				</button>
			</div>
		</>
	);
}
