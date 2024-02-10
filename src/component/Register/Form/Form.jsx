import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import {MyButton,MyInput} from '../../../UI/index'
import { refusal, successfully } from '../../../data/CardImages'

export const Form = () => {
	const [value, setValue] = useState({ name: '', tel: '', link: '' })

	const handleSubmit = e => {
		e.preventDefault()

		if (value === '') {
			successfully()
		} else {
			refusal()
		}
	}

	return (
		<form>
			<MyInput
				value={value.name}
				onChange={e => setValue({ ...value, name: e.target.value })}
				type='text'
				variant='small'
				placeholder='Введите ваше имя'
			/>
			<MyInput
				value={value.tel}
				onChange={e => setValue({ ...value, tel: e.target.value })}
				type='tel'
				variant='small'
				placeholder='Введите ваш телефон'
			/>
			<MyInput
				value={value.link}
				onChange={e => setValue({ ...value, link: e.target.value })}
				type='text'
				variant='small'
				placeholder='Ссылка на соц.сети (VK/INST/TG)'
			/>
			<MyButton type='submit' onClick={handleSubmit} variant='btnBorder'>
				Отправить заявку
			</MyButton>
			<ToastContainer />
		</form>
	)
}
