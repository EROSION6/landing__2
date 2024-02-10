import './Order.scss';
import { orderText } from '../../data/TextList';

export const Order = () => {
	return (
		<div className="order">
			<div className="order__option_left">
				<p>1</p>
				<span></span>
				<p>2</p>
				<span></span>
				<p>3</p>
				<span></span>
				<p>4</p>
			</div>
			<div className="order__option_right">
				{orderText.map(ord => (
					<div key={ord.title} className="order__option_right__option">
						<h3>{ord.title}</h3>
						<p>{ord.info}</p>
					</div>
				))}
			</div>
		</div>
	);
};
