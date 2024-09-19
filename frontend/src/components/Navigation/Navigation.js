import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
	return (
		<>
			<nav className='nav'>
				<div className='nav__elements-box'>
					<span className='nav__alert'>
						<FontAwesomeIcon icon={faBell} />
					</span>

					<button className='nav__elements'>
						<p className='nav__name'>Jakub Myszka</p>

						<span className='nav__settings'>
							<FontAwesomeIcon icon={faGear} />
						</span>
					</button>
				</div>

				<ul className='nav__list'>
					<li className='nav__list-element'>Panel</li>
					<li className='nav__list-element'>Transakcje</li>
					<li className='nav__list-element'>Budżety</li>
					<li className='nav__list-element'>Oszczędności</li>
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
