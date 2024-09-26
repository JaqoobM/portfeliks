import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import {
	faGear,
	faChartLine,
	faMoneyBillTransfer,
	faWallet,
	faSackDollar,
	faCoins,
	faArrowRightToBracket,
	faBars,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Navigation() {
	const [menu, setMenu] = useState(false);
	const [menuIsOpen, setMenuIsOpen] = useState(true);

	let navBtn;
	let navMobile;
	let menuIconsArr;
	let menuTextsArr;
	let desktopBurgerBtn;

	useEffect(() => {
		desktopBurgerBtn = document.querySelector('.burger-btn-desktop');
		navMobile = document.querySelector('.nav-mobile');
		menuIconsArr = document.querySelectorAll('#menuIcon');
		menuTextsArr = document.querySelectorAll('#menuText');
	});

	const menuHandler = () => {
		setMenu(!menu);
		navBtn.classList.toggle('nav__btn--border');
	};

	const mobileMenuHandler = (btn) => {
		if (btn.includes('burger-btn-mobile')) {
			navMobile?.classList.toggle('nav-mobile__menu-active-mobile');
		} else {
			switch (menuIsOpen) {
				case true:
					menuIconsArr.forEach((icon) => {
						icon.classList.toggle('nav-mobile__menu-inactive-desktop');
					});

					menuTextsArr.forEach((text) => {
						text.classList.toggle('nav-mobile__menu-text-disabled');
					});
					setMenuIsOpen(false)
					break;
				case false:
					setTimeout(() => {
						menuIconsArr.forEach((icon) => {
							icon.classList.toggle('nav-mobile__menu-inactive-desktop');
						});

						menuTextsArr.forEach((text) => {
							text.classList.toggle('nav-mobile__menu-text-disabled');
						});
					}, 100);
					setMenuIsOpen(true)
					break;

				default:
					break;
			}

			desktopBurgerBtn.firstChild.classList.toggle('burger-rotate');

			navMobile.classList.toggle('nav-small');
		}
	};

	return (
		<>
			<button
				onClick={(e) => {
					const btn = e.target.closest('button').className;
					mobileMenuHandler(btn);
				}}
				className='burger-btns burger-btn-mobile'>
				<div className='burger-btns__box'>
					<div className='burger-btns__bars burger-btn-mobile__bar1'></div>
					<div className='burger-btns__bars burger-btn-mobile__bar2'></div>
					<div className='burger-btns__bars burger-btn-mobile__bar3'></div>
				</div>
			</button>

			<nav className='nav-mobile'>
				<button
					onClick={(e) => {
						const btn = e.target.closest('button').className;
						mobileMenuHandler(btn);
					}}
					className='burger-btns burger-btn-desktop'>
					<div className='burger-btns__box'>
						<div className='burger-btns__bars'></div>
						<div className='burger-btns__bars'></div>
						<div className='burger-btns__bars'></div>
					</div>
				</button>

				<a href='#' className='nav-mobile__menu-link'>
					<span id='menuIcon' className='nav-mobile__menu-icon'>
						<FontAwesomeIcon icon={faChartLine} />
					</span>
					<span id='menuText' className='nav-mobile__menu-text'>
						Panel
					</span>
				</a>
				<a href='#' className='nav-mobile__menu-link'>
					<span
						id='menuIcon'
						className='nav-mobile__menu-icon nav-mobile__transaction-icon'>
						<FontAwesomeIcon icon={faMoneyBillTransfer} />
					</span>
					<span id='menuText' className='nav-mobile__menu-text'>
						Transakcje
					</span>
				</a>
				<a href='#' className='nav-mobile__menu-link'>
					<span id='menuIcon' className='nav-mobile__menu-icon'>
						<FontAwesomeIcon icon={faWallet} />
					</span>
					<span id='menuText' className='nav-mobile__menu-text'>
						Portfele
					</span>
				</a>
				<a href='#' className='nav-mobile__menu-link'>
					<span id='menuIcon' className='nav-mobile__menu-icon'>
						<FontAwesomeIcon icon={faSackDollar} />
					</span>
					<span id='menuText' className='nav-mobile__menu-text'>
						Budżety
					</span>
				</a>
				<a href='#' className='nav-mobile__menu-link'>
					<span id='menuIcon' className='nav-mobile__menu-icon'>
						<FontAwesomeIcon icon={faCoins} />
					</span>
					<span id='menuText' className='nav-mobile__menu-text'>
						Oszczędności
					</span>
				</a>
				<div className='nav-mobile__menu-settings-box'>
					<a href='#' className='nav-mobile__menu-link'>
						<span id='menuIcon' className='nav-mobile__menu-icon'>
							<FontAwesomeIcon icon={faGear} />
						</span>
						<span id='menuText' className='nav-mobile__menu-text'>
							Ustawienia
						</span>
					</a>
					<a href='#' className='nav-mobile__menu-link'>
						<span id='menuIcon' className='nav-mobile__menu-icon'>
							<FontAwesomeIcon icon={faArrowRightToBracket} />
						</span>
						<span id='menuText' className='nav-mobile__menu-text'>
							Wyloguj
						</span>
					</a>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
