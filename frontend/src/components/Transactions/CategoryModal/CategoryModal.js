import './CategoryModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import {
	faChevronDown,
	faCartShopping,
	faXmark,
	faUtensils,
	faSuitcaseMedical,
	faPaw,
	faDog,
	faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef, useEffect } from 'react';

export default function CategoryModal(props) {
	const categoryEditPanelRef = useRef(null);
	const categoryCreatePanelRef = useRef(null);
	const createCategoryNameRef = useRef(null);
	const categoryIconListRef = useRef(null);
	const categoryIconList = [
		{
			name: faCartShopping,
			key: '1',
		},
		{
			name: faUtensils,
			key: '2',
		},
		{
			name: faSuitcaseMedical,
			key: '3',
		},
		{
			name: faPaw,
			key: '4',
		},
		{
			name: faDog,
			key: '5',
		},
		{
			name: faWineGlass,
			key: '6',
		},
	];
	const [categoryIcon, setCategoryIcon] = useState();

	const categoryEditHandler = (x) => {
		if (x === 'open') {
			categoryEditPanelRef.current?.classList.remove('no-transition');
			categoryEditPanelRef.current?.classList.add('edit-panel-activated');
			categoryCreatePanelRef.current?.classList.add('create-panel-hidden');
		} else {
			categoryEditPanelRef.current?.classList.remove('edit-panel-activated');
			categoryCreatePanelRef.current?.classList.remove('create-panel-hidden');
		}
	};

	const categoryIconBtnHandler = (e) => {
		e.target.closest('button').classList.toggle('category-btn-border');
		categoryIconListRef.current.classList.toggle('category-icon-list-apper');

		const iconKey = e.target.closest('li').getAttribute('iconKey');
		const iconObj = categoryIconList.find((el) => {
			return el.key === iconKey;
		});
		setCategoryIcon(iconObj.name);
	};

	return (
		<>
			<div className='category-modal'>
				{/* CREATE MODAL */}
				<form
					onSubmit={(e) => {
						e.preventDefault();
						props.categoryHandler({
							name: createCategoryNameRef.current.value,
						});
					}}
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
						<input
							ref={createCategoryNameRef}
							className='category-modal__input'
							type='text'></input>
						<label className='category-modal__label'>Nazwa</label>
					</div>

					{/* BOTTOM BOX */}
					<div className='category-modal__bottom-box'>
						<button
							onClick={(e) => {
								categoryIconBtnHandler(e);
							}}
							type='button'
							className='category-modal__icon-box'>
							<div className='category-modal__btn-add-icon'>
								<div className='category-modal__btn-icon-box'>
									<span className='category-modal__btn-icon'>
										<FontAwesomeIcon icon={categoryIcon} />
									</span>
								</div>

								<span className='category-modal__btn-chevron'>
									<FontAwesomeIcon icon={faChevronDown} />
								</span>
							</div>

							<span className='category-modal__icon-span'>Ikona</span>
							<ul
								ref={categoryIconListRef}
								className='category-modal__icons-list'>
								{categoryIconList.map((icon) => {
									return (
										<React.Fragment key={icon.key}>
											<li
												iconKey={icon.key}
												className='category-modal__icons-list-icon'>
												<div className='category-modal__btn-icon-box'>
													<span className='category-modal__btn-icon'>
														<FontAwesomeIcon icon={icon.name} />
													</span>
												</div>
											</li>
										</React.Fragment>
									);
								})}
							</ul>
						</button>

						<button className='category-modal__btn'>Dodaj</button>
					</div>
				</form>

				{/* EDIT MODAL */}
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

					{/* BOTTOM BOX */}
					<div className='category-modal__bottom-box'>
						<button
							type='button'
							onClick={categoryIconBtnHandler}
							className='category-modal__icon-box'>
							<div
								// ref={categoryBtnIconRef}
								className='category-modal__btn-add-icon'>
								<div className='category-modal__btn-icon-box'>
									<span className='category-modal__btn-icon'>
										<FontAwesomeIcon icon={faCartShopping} />
									</span>
								</div>

								<span className='category-modal__btn-chevron'>
									<FontAwesomeIcon icon={faChevronDown} />
								</span>
							</div>

							<span className='category-modal__icon-span'>Ikona</span>
						</button>
						<button className='category-modal__btn category-modal__btn-delete'>
							Usuń
						</button>
						<button className='category-modal__btn category-modal__btn-save'>
							Zapisz
						</button>
					</div>
				</div>

				{/* CATEGORY LIST */}
				<ul className='category-modal__categories-container'>
					{props.categoryList.map(() => {
						return (
							<li
								onClick={() => {
									categoryEditHandler('open');
								}}
								className='category-modal__category-box'>
								<div className='category-modal__btn-icon-box'>
									<span className='category-modal__btn-icon'>
										<FontAwesomeIcon icon={faCartShopping} />
									</span>
								</div>
								<span className='category-modal__category-name'>Zakupy</span>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
