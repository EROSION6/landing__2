import './Advantages.scss';
import CardImages_2 from '../../images/Card/1.jpg';
import CardImagesBlock_1 from '../../images/Card/2.png';
import CardImagesBlock_2 from '../../images/Card/3.jpg';
import CardImages_1 from '../../images/Card/6.png';
import { Card } from '../Card/Card';
import { motion } from 'framer-motion';

const card1Img = (
	<img className="advantages__content__grid__cardImage1__foto" src={CardImagesBlock_1} alt='block1'/>
);
const card2Img = (
	<img className="advantages__content__grid__cardImage2__foto" src={CardImagesBlock_2} alt='block1'/>
);
const card3Img = (
	<img
		className='advantages__content__grid__cardImage3__foto'
		src='https://berezka.netlify.app/assets/images/service_side3.png'
		alt='block1'
	/>
)

export const Advantages = () => {
	const blockAdvantagesAnimate = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { delay: 0.2, ease: 'easeOut' },
		},
	};

	return (
		<motion.div 		animateOnce={true} id='advantages' variants={blockAdvantagesAnimate} initial='hidden' whileInView='visible' viewport={{ amount: 0.1 }} className="advantages">
			<div className="advantages__title">
				<h2>Преимущества</h2>
			</div>
			<div className="advantages__flex">
				<div className="advantages__content__grid__cardImage1">
					<Card title='Быстрая доставка' info='Эффективная и оперативная доставка товаров прямо к вам.' img={CardImages_2}/>
					{card1Img}
				</div>
				<div className="advantages__content__grid__cardImage2">
					{card2Img}
					<Card title='Низкие цены' info='Гарантированно выгодные цены,делающие наши товары доступными для каждого клиента.' nn="none"/>
				</div>
				<div className="advantages__content__grid__cardImage3">
					<div className="advantages__content__grid__cardImage3__card">
						<Card title='Широкий ассортимент' info='Разнообразие уникальных товаров, чтобы удовлетворить различные потребности клиентов.' img={CardImages_1}/>
						<Card title='Гарантированное качество' info='Тщательный отбор товаров, обеспечивающий высокий стандарт качества.' nn="none"/>
					</div>
					{card3Img}
				</div>
				<Card style={{ width: '100%', margin: '24px 0' }} title='Простой опыт шопинга' info='Интуитивно понятный интерфейс,чтобы сделать покупки лёгкими и приятными.' nn="none"/>
			</div>
		</motion.div>
	);
};

