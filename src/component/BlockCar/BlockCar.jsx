import { motion } from 'framer-motion'
import { MyButton } from '../../UI/index'
import car from '../../images/car.png'
import './BlockCar.scss'

export const BlockCar = () => {
	const mainBlockAnimate = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	}

	const h1Animate = {
		hidden: { opacity: 0, x: '-100%' },
		visible: {
			opacity: 1,
			x: 0,
			transition: { delay: 0.2, duration: 0.5, ease: 'easeOut' },
		},
	}

	const pAnimate = {
		hidden: { opacity: 0, x: '-100%' },
		visible: {
			opacity: 1,
			x: 0,
			transition: { delay: 0.4, duration: 0.5, ease: 'easeOut' },
		},
	}

	const btnAnimate = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { delay: 0.6, duration: 0.5, ease: 'easeOut' },
		},
	}

	const imgAnimate = {
		hidden: { opacity: 0, x: '100%' },
		visible: {
			opacity: 1,
			x: 0,
			transition: { delay: 0.8, duration: 0.5, ease: 'easeOut' },
		},
	}
	return (
		<motion.section
			id='main'
			variants={mainBlockAnimate}
			animateOnce={true}
			initial='hidden'
			animate='visible'
			className='container'
		>
			<motion.h1 animateOnce={true} variants={h1Animate}>
				БЕРЁЗКА <br />
				ЕВРОШОППИНГ
			</motion.h1>
			<motion.p animateOnce={true} variants={pAnimate}>
				Ваш партнер по доступным ценам и оперативной доставке товаров из Польши
				в Россию. Доставляем товары с популярных магазинов. Мы ценим каждого
				клиента и гарантируем, что ваши заказы будут доставлены в срок.
			</motion.p>
			<motion.div
				animateOnce={true}
				variants={btnAnimate}
				className='container__btn'
			>
				<MyButton variant='btnBackground'>Рассчитать стоимость</MyButton>
				<MyButton variant='btnBackground'>Заказать доставку</MyButton>
			</motion.div>
			<motion.div
				animateOnce={true}
				variants={imgAnimate}
				className='container__images'
			>
				<img src={car} alt='car' />
			</motion.div>
		</motion.section>
	)
}
