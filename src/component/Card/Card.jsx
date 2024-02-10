import "./Card.scss"

export const Card = ({ style, title, info, img, nn }) => {
	const none = {
		display: nn ? "none" : "block",
	}

	return (
		<div style={style} className='card'>
			<div className='card__description'>
				<strong>{title}</strong>
				<p>{info}</p>
			</div>
			<div className='card__images'>
				<img style={none} src={img} alt='card' />
			</div>
		</div>
	)
}
