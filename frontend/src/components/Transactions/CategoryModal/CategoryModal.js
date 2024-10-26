import './CategoryModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import {
	faChevronDown,
	faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

export default function CategoryModal(props) {
	return (
		<>
			<div className='category-modal'>
				<button
					onClick={props.categoryModalHandler}
					className='category-modal__btn-close'>
					<span className='category-modal__btn-close-icon'>
						<FontAwesomeIcon icon={faCircleXmark} />
					</span>
				</button>
				<span className='category-modal__title'>Stwórz kategorię</span>
				<div className='category-modal__input-box'>
					<input className='category-modal__input' type='text'></input>
					<label className='category-modal__label'>Nazwa</label>
				</div>

				<div className='category-modal__bottom-box'>
					<div className='category-modal__icon-box'>
						<button type='button' className='category-modal__btn-add-icon'>
							<div className='category-modal__btn-icon-box'>
								<span className='category-modal__btn-icon'>
									<FontAwesomeIcon icon={faCartShopping} />
								</span>
							</div>

							<span className='category-modal__btn-chevron'>
								<FontAwesomeIcon icon={faChevronDown} />
							</span>
						</button>

						<span className='category-modal__icon-span'>Ikona</span>
					</div>
					<button className='category-modal__btn-add'>Dodaj</button>
				</div>

				<div className='category-modal__categories-container'>

					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>
					<div className='category-modal__category-box'>

						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>

                              <span className='category-modal__category-name'>Zakupy</span>

					</div>

				</div>
			</div>
		</>
	);
}
