import { motion, useAnimation } from 'framer-motion'
import { useState } from 'react'
import { listAccordion, listExSort } from '../../data/TextList'
import arrowCircle from '../../images/svg/arrowC.svg'
import './ListExamination.scss'

export const ListExamination = () => {
	const [active, setActive] = useState(-1)
	const animate = useAnimation()

	const handleActiveAccordion = i => {
		if (active === i) {
			setActive(-1)
			animate.start({ opacity: 0 })
		} else {
			setActive(i)
			animate.start({ opacity: 1 })
		}
	}

	const blockListExAnimate = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { delay: 0.2, ease: 'easeOut' },
		},
	}

	return (
		<motion.div
			id='listEx'
			variants={blockListExAnimate}
			initial='hidden'
			whileInView='visible'
			animateOnce={true}
			viewport={{ amount: 0.1 }}
			className='listEx'
		>
			<h1>
				Список проверенных <br />
				магазинов
			</h1>
			<p>Здесь вы можете найти нужный вам магазин</p>
			<div className='listEx__sort'>
				<nav>
					<ul>
						{listExSort.map((list, i) => (
							<li key={i}>
								<a href='#'>{list}</a>
								<img
									onClick={() => handleActiveAccordion(i)}
									style={
										active === i
											? { transform: 'rotate(180deg)' }
											: { transform: 'rotate(0deg)' }
									}
									src={arrowCircle}
									alt='arrow'
								/>
							</li>
						))}
					</ul>
				</nav>
				<motion.div
					style={{ opacity: active === -1 ? 1 : 0 }}
					initial={{ opacity: 1 }}
					animate={animate}
					className='listEx__sort__accordion'
				>
					{listAccordion.map(list => (
						<a key={list} href='#'>
							{list}
						</a>
					))}
				</motion.div>
			</div>
		</motion.div>
	)
}
