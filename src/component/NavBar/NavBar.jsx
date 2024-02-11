import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'
import { navigation } from '../../data/TextList'
import './NavBar.scss'
import logo from '/src/images/svg/Logo_pc.svg'
import burger from '/src/images/svg/burger.svg'
import cross from '/src/images/svg/cross.svg'

export const NavBar = () => {
	const [open, isOpen] = useState(false)
	const animate = useAnimation()

	const handleOpenActiveNavBar = () => {
		isOpen(true)
		animate.start({ top: 0 })
	}
	const handleCloseActiveNavBar = () => {
		isOpen(false)
		animate.start({ top: '-100%' })
	}

	const headerAnimation = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { delay: 0.2, duration: 0.4, ease: 'linear' },
		},
	}

	return (
		<>
			<motion.header
				animateOnce={true}
				initial='hidden'
				animate='visible'
				variants={headerAnimation}
				id='scroll-header'
				className='header'
			>
				<div className='header__logo'>
					<img src={logo} alt='logo' />
				</div>
				<motion.div
					style={{ top: open ? 0 : '-100%' }}
					initial={{ top: '-100%' }}
					animate={animate}
					className='header__navigation'
				>
					<nav>
						{navigation.map((item, i) => (
							<motion.a
								variants={headerAnimation}
								key={i}
								href={`#${item.path}`}
							>
								{item.name}
							</motion.a>
						))}
					</nav>
					<div
						onClick={handleCloseActiveNavBar}
						className='header__navigation__cross'
					>
						<img src={cross} alt='cross' />
					</div>
				</motion.div>
				<div onClick={handleOpenActiveNavBar} className='burger__menu'>
					<img src={burger} alt='burger' />
				</div>
			</motion.header>
		</>
	)
}
