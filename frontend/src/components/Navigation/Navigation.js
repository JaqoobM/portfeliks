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

	let navBtn;
	let navMobile;
	let menuIconsArr;
	let menuTextsArr;

	useEffect(() => {
		navBtn = document.querySelector('.nav__btn');
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
			menuIconsArr.forEach((icon) => {
				icon.classList.toggle('nav-mobile__menu-inactive-desktop');
			});

			menuTextsArr.forEach((text) => {
				text.classList.toggle('nav-mobile__menu-text-disabled')
			})
		}
	};

	return (
		<>
			{/* <nav className='nav'>
				<div className='nav__btn-box'>
					<span className='nav__alert'>
						<FontAwesomeIcon icon={faBell} />
					</span>

					<button type='button' className='nav__btn' onClick={menuHandler}>
						<p className='nav__name'>jm54706@outlook.com</p>

						<span className='nav__settings'>
							<FontAwesomeIcon icon={faGear} />
						</span>

						{menu && (
							<div className='nav__menu-box'>
								<ul className='nav__menu-list'>
									<li className='nav__menu-element'>Ustawienia</li>
									<div className='nav__menu-line'></div>
									<li className='nav__menu-element'>Wyloguj</li>
								</ul>

								<div className='nav__menu-bg'></div>
							</div>
						)}
					</button>
				</div>

				<ul className='nav__list'>
					<li className='nav__list-element'>Panel</li>
					<li className='nav__list-element'>Transakcje</li>
					<li className='nav__list-element'>Budżety</li>
					<li className='nav__list-element'>Oszczędności</li>
				</ul>
			</nav> */}

			<nav className='nav-mobile'>
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

			<button
				className='burger-btns burger-btn-mobile'
				onClick={(e) => {
					const btn = e.target.closest('button').className;
					mobileMenuHandler(btn);
				}}>
				<FontAwesomeIcon icon={faBars} />
			</button>

			<button
				className='burger-btns burger-btn-desktop'
				onClick={(e) => {
					const btn = e.target.closest('button').className;
					mobileMenuHandler(btn);
				}}>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</>
	);
}

export default Navigation;
