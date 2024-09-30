import './Transactions.scss';
import Navigation from '../Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import {
	faEllipsisVertical,
	faMagnifyingGlass,
	faPlus,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

function Transactions() {
	return (
		<>
			<Navigation />
			<div className='top-bar-app'>
				<button className='top-bar-app__settings-btn' type='button'>
					<span className='top-bar-app__settings-icon'>
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</span>
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

				<button className='top-bar-app__burger-btn' type='button'>
					<span className='top-bar-app__burger-bar'></span>
					<span className='top-bar-app__burger-bar'></span>
					<span className='top-bar-app__burger-bar'></span>
				</button>
			</div>

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

			<div className='transactions-filters'>
				<span className='transactions-filters__title'>Filtry</span>

				<button
					className='transactions-filters__btn transactions-filters__date-btn'
					type='button'>
					<span className='transactions-filters__text-btn'>Okres</span>
					<span className='transactions-filters__icon'>
						<FontAwesomeIcon icon={faChevronRight} />
					</span>
				</button>
				<div className='transactions-filters__text-box'>
					<ul className='transactions-filters__text'>
						<li>Obecny miesiąc</li>
					</ul>
				</div>

				<button
					className='transactions-filters__btn transactions-filters__sort-btn'
					type='button'>
					<span className='transactions-filters__text-btn'>Sortowanie</span>
					<span className='transactions-filters__icon'>
						<FontAwesomeIcon icon={faChevronRight} />
					</span>
				</button>
				<div className='transactions-filters__text-box'>
					<ul className='transactions-filters__text'>
						<li>Od najnowszych</li>
					</ul>
				</div>

				<button
					className='transactions-filters__btn transactions-filters__categories-btn'
					type='button'>
					<span className='transactions-filters__text-btn'>Kategorie</span>
					<span className='transactions-filters__icon'>
						<FontAwesomeIcon icon={faChevronRight} />
					</span>
				</button>
				<div className='transactions-filters__text-box'>
					<ul className='transactions-filters__text'>
						<li>Wszystkie</li>
					</ul>
				</div>

				<button
					className='transactions-filters__btn transactions-filters__wallet-btn'
					type='button'>
					<span className='transactions-filters__text-btn'>Portfel</span>
					<span className='transactions-filters__icon'>
						<FontAwesomeIcon icon={faChevronRight} />
					</span>
				</button>
				<div className='transactions-filters__text-box'>
					<ul className='transactions-filters__text'>
						<li>Dostępne środki (3200zł)</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Transactions;
