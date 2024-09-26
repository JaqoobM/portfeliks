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
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Navigation() {
	const [menuIsOpen, setMenuIsOpen] = useState(true);

	let nav;
	let menuIconsArr;
	let menuTextsArr;
	let burgerBtnDesktop;

	useEffect(() => {
		burgerBtnDesktop = document.querySelector('#burgerBtnDesktop');
		nav = document.querySelector('.nav');
		menuIconsArr = document.querySelectorAll('#menuIcon');
		menuTextsArr = document.querySelectorAll('#menuText');
	});

	const mobileMenuHandler = (btnId) => {
		if (btnId === 'burgerBtnMobile') {
			nav?.classList.toggle('nav-mobile-activated');
		} else {
			switch (menuIsOpen) {
				case true:
					menuIconsArr.forEach((icon) => {
						icon.classList.add('nav-icons-margin-off');
					});
					menuTextsArr.forEach((text) => {
						text.classList.add('nav-texts-disabled');
					});
					setMenuIsOpen(false);
					break;
				case false:
					setTimeout(() => {
						menuTextsArr.forEach((text) => {
							text.classList.remove('nav-texts-disabled');
						});
					}, 100);
					menuIconsArr.forEach((icon) => {
						icon.classList.remove('nav-icons-margin-off');
					});
					setMenuIsOpen(true);
					break;
				default:
					break;
			}
			burgerBtnDesktop.firstChild.classList.toggle('burger-rotate');
			nav.classList.toggle('nav-small');
		}
	};

	return (
		<>
			<button
				id='burgerBtnMobile'
				className='burger-btns burger-btn-mobile'
				onClick={(e) => {
					const btnId = e.target.closest('button').id;
					mobileMenuHandler(btnId);
				}}>
				<div className='burger-btns__box'>
					<div className='burger-btns__bars burger-btn-mobile__bar1'></div>
					<div className='burger-btns__bars burger-btn-mobile__bar2'></div>
					<div className='burger-btns__bars burger-btn-mobile__bar3'></div>
				</div>
			</button>

			<nav className='nav'>
				<button
					id='burgerBtnDesktop'
					className='burger-btns burger-btn-desktop'
					onClick={(e) => {
						const btnId = e.target.closest('button').id;
						mobileMenuHandler(btnId);
					}}>
					<div className='burger-btns__box'>
						<div className='burger-btns__bars'></div>
						<div className='burger-btns__bars'></div>
						<div className='burger-btns__bars'></div>
					</div>
				</button>

				<a href='#' className='nav__menu-link'>
					<span id='menuIcon' className='nav__menu-icon'>
						<FontAwesomeIcon icon={faChartLine} />
					</span>
					<span id='menuText' className='nav__menu-text'>
						Panel
					</span>
				</a>
				<a href='#' className='nav__menu-link'>
					<span id='menuIcon' className='nav__menu-icon nav__transaction-icon'>
						<FontAwesomeIcon icon={faMoneyBillTransfer} />
					</span>
					<span id='menuText' className='nav__menu-text'>
						Transakcje
					</span>
				</a>
				<a href='#' className='nav__menu-link'>
					<span id='menuIcon' className='nav__menu-icon'>
						<FontAwesomeIcon icon={faWallet} />
					</span>
					<span id='menuText' className='nav__menu-text'>
						Portfele
					</span>
				</a>
				<a href='#' className='nav__menu-link'>
					<span id='menuIcon' className='nav__menu-icon'>
						<FontAwesomeIcon icon={faSackDollar} />
					</span>
					<span id='menuText' className='nav__menu-text'>
						Budżety
					</span>
				</a>
				<a href='#' className='nav__menu-link'>
					<span id='menuIcon' className='nav__menu-icon'>
						<FontAwesomeIcon icon={faCoins} />
					</span>
					<span id='menuText' className='nav__menu-text'>
						Oszczędności
					</span>
				</a>
				<div className='nav__menu-settings-box'>
					<a href='#' className='nav__menu-link'>
						<span id='menuIcon' className='nav__menu-icon'>
							<FontAwesomeIcon icon={faGear} />
						</span>
						<span id='menuText' className='nav__menu-text'>
							Ustawienia
						</span>
					</a>
					<a href='#' className='nav__menu-link'>
						<span id='menuIcon' className='nav__menu-icon'>
							<FontAwesomeIcon icon={faArrowRightToBracket} />
						</span>
						<span id='menuText' className='nav__menu-text'>
							Wyloguj
						</span>
					</a>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
