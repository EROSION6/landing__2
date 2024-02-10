import "./DeliveryPrice.scss"
import calculator from "../../images/calculator.png"
import { motion } from "framer-motion"

export const DeliveryPrice = () => {
	const blockDeliverAnimate = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { delay: 0.2, ease: "easeOut" },
		},
	}

	return (
		<motion.div
			id='deliver'
			variants={blockDeliverAnimate}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.1 }}
			className='deliveryPrice'>
			<div className='deliveryPrice__block'>
				<div className='deliveryPrice__block__text'>
					<h2>
						Рассчитать стоимость <br />
						доставки
					</h2>
					<p>Вы можете предварительно рассчитать стоимость доставки</p>
					<div className='deliveryPrice__block__text__form'>
						<label>
							Сумма с сайта/ZLT{" "}
							<input type='text' placeholder='Введите сумму ' />
						</label>
						<p>Итоговая сумма/RUB: 12.345</p>
					</div>
				</div>
				<div className='deliveryPrice__block__images'>
					<img src={calculator} alt='calculator' />
				</div>
			</div>
		</motion.div>
	)
}
