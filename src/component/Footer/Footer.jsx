import { useState } from 'react'
import { MyButton, MyInput } from '../../UI/index'
import { refusal, successfully } from '../../data/CardImages'
import instagram from '../../images/svg/instagram-fill.svg'
import telegram from '../../images/svg/telegram-original.svg'
import vk from '../../images/svg/vk.svg'
import './Footer.scss'

export const Footer = () => {
	const icons = [{ icon: telegram }, { icon: vk }, { icon: instagram }]
	const [email, setEmail] = useState('')
	const [buttonText, setButtonText] = useState('Отправить')

	const handleSubmitEmail = e => {
		e.preventDefault()
		if (email === '') {
			refusal()
		} else {
			successfully()
			setButtonText('Отправлено')
		}
	}

	return (
		<footer className='footer'>
			<h1>БЕРЁЗКА</h1>
			<div className='footer__block'>
				<div className='footer__block__icons'>
					{icons.map((icon, i) => (
						<img src={icon.icon} alt='social' key={i} />
					))}
				</div>
				<div className='footer__block__form'>
					<form className='footer__block__form__input'>
						<MyInput
							value={email}
							onChange={e => setEmail(e.target.value)}
							variant='small'
							placeholder='Введите ваш Email'
						/>
						<MyButton
							onClick={handleSubmitEmail}
							type='submit'
							variant='btnBackground'
						>
							{buttonText}
						</MyButton>
					</form>
					<p>
						Подпишитесь на наши новости и будьте в курсе всех <br />
						акций и специальных предложений
					</p>
				</div>
			</div>
		</footer>
	)
}
