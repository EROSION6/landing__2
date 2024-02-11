import { Footer } from './component/Footer/Footer'
import { Main } from './component/Main/Main'
import { NavBar } from './component/NavBar/NavBar'
import ap from './index.module.scss'

export const App = () => {
	return (
		<div className={ap.app}>
			<NavBar />
			<Main />
			<Footer />
		</div>
	)
}
