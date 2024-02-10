import { Footer } from './component/Footer/Footer';
import { Main } from './component/Main/Main';
import { NavBar } from './component/NavBar/NavBar';
import ap from './index.module.scss';
import arrow from './images/svg/arrowC.svg';

export const App = () => {
	return (
		<div className={ap.app}>
			<a href='#scroll-header' className={ap.app__scrolling}>
				<img src={arrow} alt='arrow' />
			</a>
			<NavBar />
			<Main />
			<Footer />
		</div>
	);
};
