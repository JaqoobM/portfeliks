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
	faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Navigation() {
	const [menuIsOpen, setMenuIsOpen] = useState(true);

	let nav;
	let menuIconsArr;
	let menuTextsArr;
	let burgerBtnDesktop;
	let burgerBtnMobile;
	let bar1;
	let bar2;
	let bar3;

	useEffect(() => {
		bar1 = document.querySelector('#bar1');
		bar2 = document.querySelector('#bar2');
		bar3 = document.querySelector('#bar3');
		burgerBtnDesktop = document.querySelector('#burgerBtnDesktop');
		burgerBtnMobile = document.querySelector('#burgerBtnMobile');
		nav = document.querySelector('.nav');
		menuIconsArr = document.querySelectorAll('#menuIcon');
		menuTextsArr = document.querySelectorAll('#menuText');
	});

	const mobileMenuHandler = (btnId) => {
		if (btnId === 'burgerBtnMobile') {
			nav?.classList.toggle('nav-mobile-activated');
			burgerBtnMobile?.classList.toggle('btn-x-wispan');
			bar1?.classList.toggle('bar1-x');
			bar2?.classList.toggle('bar2-x');
			bar3?.classList.toggle('bar3-x');
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
			{/* <button
				id='burgerBtnMobile'
				className='burger-btns burger-btn-mobile'
				onClick={(e) => {
					const btnId = e.target.closest('button').id;
					mobileMenuHandler(btnId);
				}}>
				<div className='burger-btns__box'>
					<span id='bar1' className='burger-btns__bars burger-btn-mobile__bar1'></span>
					<span id='bar2' className='burger-btns__bars burger-btn-mobile__bar2'></span>
					<span id='bar3' className='burger-btns__bars burger-btn-mobile__bar3'></span>
				</div>
			</button> */}

			<nav className='nav'>
				<button
					id='burgerBtnDesktop'
					className='burger-btn'
					onClick={(e) => {
						const btnId = e.target.closest('button').id;
						mobileMenuHandler(btnId);
					}}>
					<div className='burger-btn__box' type='button'>
						<span className='burger-btn__bar'></span>
						<span className='burger-btn__bar'></span>
						<span className='burger-btn__bar'></span>
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
						<FontAwesomeIcon icon={faCoins} />
					</span>
					<span id='menuText' className='nav__menu-text'>
						Oszczędności
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

			<nav className='nav-mobile-app'>
				<button className='nav-mobile-app__box nav-mobile-app__box1'>
					<span className='nav-mobile-app__icon'>
						<FontAwesomeIcon icon={faChartLine} />
					</span>
					<span className='nav-mobile-app__text'>Panel</span>
				</button>
				<button className='nav-mobile-app__box nav-mobile-app__box2'>
					<span className='nav-mobile-app__icon'>
						<FontAwesomeIcon icon={faMoneyBillTransfer} />
					</span>
					<span className='nav-mobile-app__text'>Transakcje</span>
				</button>
				<button className='nav-mobile-app__box nav-mobile-app__box3'>
					<span className='nav-mobile-app__icon'>
						<FontAwesomeIcon icon={faWallet} />
					</span>
					<span className='nav-mobile-app__text'>Portfele</span>
				</button>
				<button className='nav-mobile-app__box nav-mobile-app__box4'>
					<span className='nav-mobile-app__icon'>
						<FontAwesomeIcon icon={faCoins} />
					</span>
					<span className='nav-mobile-app__text'>Oszczędności</span>
				</button>
				<button className='nav-mobile-app__box nav-mobile-app__box5'>
					<span className='nav-mobile-app__icon'>
						<FontAwesomeIcon icon={faSackDollar} />
					</span>
					<span className='nav-mobile-app__text'>Budżety</span>
				</button>
			</nav>

			
		</>
	);
}

export default Navigation;
