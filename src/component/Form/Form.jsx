import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { MyButton } from '../../UI/MyButton/MyButton'
import { refusal, successfully } from '../../data/CardImages'
import { BottomBlock } from '../BottomBlock/BottomBlock'
import { TopBlock } from '../TopBlock/TopBlock'
import './Form.scss'

export const Form = () => {
	const [value, setValue] = useState({
		name: '',
		tel: '',
		link: '',
		social: '',
	})

	const handleSubmit = e => {
		e.preventDefault()
		if (
			value.name === '' ||
			value.tel === '' ||
			value.link === '' ||
			value.social === ''
		) {
			return refusal()
		} else {
			return successfully()
		}
	}

	return (
		<div id='form' className='form'>
			<h1>Оформить заявку </h1>
			<form className='form__block'>
				<strong>Заполните форму </strong>
				<TopBlock value={value} setValue={setValue} />
				<BottomBlock value={value} setValue={setValue} />
				<MyButton onClick={handleSubmit} type='submit' variant='btnBorder'>
					Отправить заявку
				</MyButton>
				<ToastContainer />
			</form>
		</div>
	)
}
