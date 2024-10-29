import './CategoryModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import {
	faChevronDown,
	faCartShopping,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

export default function CategoryModal(props) {
	const [categoryEditIsOpen, setCategoryEditIsOpen] = useState(false);
	const categoryEditPanelRef = useRef(null);
	const categoryCreatePanelRef = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			categoryEditPanelRef.current?.classList.remove('no-transition');
			categoryEditPanelRef.current?.classList.add('edit-panel-activated');
		}, 1);
	}, [categoryEditIsOpen]);

	const categoryEditHandler = () => {
		setCategoryEditIsOpen(!categoryEditIsOpen);
		// categoryEditPanelRef.current?.classList.add('edit-panel-activated');
	};

	return (
		<>
			<div className='category-modal'>
				<div
					ref={categoryCreatePanelRef}
					className='category-modal__create-panel'>
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
				</div>
				{categoryEditIsOpen ? (
					<div
						ref={categoryEditPanelRef}
						className='category-modal__edit-panel no-transition'>
						<button
							onClick={categoryEditHandler}
							className='category-modal__btn-close'>
							<span className='category-modal__btn-close-icon category-modal__btn-close-icon-edit'>
								<FontAwesomeIcon icon={faXmark} />
							</span>
						</button>
						<span className='category-modal__title category-modal__title-edit'>
							Edytuj kategorię
						</span>
						<div className='category-modal__input-box'>
							<input
								className='category-modal__input category-modal__input-edit'
								type='text'></input>
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
							<button className='category-modal__btn-add category-modal__btn-delete'>
								Usuń
							</button>
							<button className='category-modal__btn-add category-modal__btn-save'>
								Zapisz
							</button>
						</div>
					</div>
				) : (
					<div
						ref={categoryCreatePanelRef}
						className='category-modal__create-panel'>
						{/* <button
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
						</div> */}
					</div>
				)}

				<ul className='category-modal__categories-container'>
					<li
						onClick={categoryEditHandler}
						className='category-modal__category-box'>
						<div className='category-modal__btn-icon-box'>
							<span className='category-modal__btn-icon'>
								<FontAwesomeIcon icon={faCartShopping} />
							</span>
						</div>
						<span className='category-modal__category-name'>Zakupy</span>
					</li>
				</ul>
			</div>
		</>
	);
}
