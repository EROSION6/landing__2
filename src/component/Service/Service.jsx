import { Order } from '../Order/Order';
import './Service.scss';
import boxes from '../../images/boxes.png';
import { motion } from 'framer-motion';

export const Service = () => {
	const blockServiceAnimate = {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0, transition: { delay: 0.2, ease: 'easeOut' } },
	};

	return (
		<>
			<motion.div
        id='service'
				variants={blockServiceAnimate}
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.1 }}
				className="service">
				<div className="service__block">
					<span>
						<div className="service__block__title">
							<h2>Доставка</h2>
							<p>
								Доставка осуществляется во все регионы России, <br />
								любим способом доставки.
							</p>
						</div>
						<Order />
					</span>
					<div className="service__block__images">
						<img src={boxes} alt='boxes' />
					</div>
				</div>
			</motion.div>
		</>
	);
};
