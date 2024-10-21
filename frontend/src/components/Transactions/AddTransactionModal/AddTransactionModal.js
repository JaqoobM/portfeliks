import './AddTransactionModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function AddTransactionModal(props) {
	return (
		<>
			<div className='add-transaction'>
				<button
					type='button'
					className='add-transaction__close-btn'
					onClick={props.addModalHandler}>
					<span className='add-transaction__close-icon'>
						<FontAwesomeIcon icon={faCircleXmark} />
					</span>
				</button>
				<span className='add-transaction__title'>Dodaj transakcję</span>
				<div className='add-transaction__input-box'>
					<label for='name' className='add-transaction__label'>
						Nazwa
					</label>
					<input id='name' className='add-transaction__input'></input>
				</div>
				<div className='add-transaction__input-box'>
					<span className='add-transaction__input-currency'>zł</span>
					<label for='amount' className='add-transaction__label'>
						Kwota
					</label>
					<input
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
						className='add-transaction__date-input'
						type='date'
						value='2024-10-21'></input>
				</div>
				<button className='add-transaction__list-btn' type='button'>
					Brak kategorii
					<span className='add-transaction__list-btn-span'>Kategoria</span>
					<span className='add-transaction__list-btn-chevron'>
						<FontAwesomeIcon icon={faChevronDown} />
					</span>
				</button>
				<button className='add-transaction__list-btn' type='button'>
					Brak ikony
					<span className='add-transaction__list-btn-span'>Ikona</span>
					<span className='add-transaction__list-btn-chevron'>
						<FontAwesomeIcon icon={faChevronDown} />
					</span>
				</button>
				<button
					className='add-transaction__add-btn'
					type='button'
					onClick={() => {
						props.addModalHandler('addBtn');
					}}>
					Dodaj
				</button>
			</div>
		</>
	);
}
