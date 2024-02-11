import { ToastContainer } from 'react-toastify'
import { MyButton, MyInput } from '../../../UI/index'
import { refusal, successfully } from '../../../data/CardImages'
import { useInput } from '../../../hook/useInput'
import './CustomForm.scss'

export const CustomForm = () => {
	const name = useInput('', { isEmpty: true, minLength: 3 })
	const tel = useInput('', { isEmpty: true, minLength: 10 })
	const link = useInput('', { isEmpty: true, minLength: 22 })

	const handleSubmit = e => {
		e.preventDefault()
		if (
			name.isEmpty ||
			name.minLength ||
			tel.isEmpty ||
			tel.minLength ||
			link.isEmpty ||
			link.minLength
		) {
			refusal()
		} else {
			successfully()
		}
	}

	const validationsBlock = value => {
		return (
			<>
				{value.isDirty && value.isEmpty && (
					<div className='empty'>Поле не может быть пустым</div>
				)}
				{value.isDirty && value.minLength && (
					<div className='dirty'>Некорректная длина</div>
				)}
			</>
		)
	}

	return (
		<form className='form'>
			<MyInput
				value={name.value}
				onBlur={e => name.onBlur(e)}
				onChange={e => name.onChange(e)}
				type='text'
				variant='small'
				placeholder='Введите ваше имя'
			/>
			{validationsBlock(name)}
			<MyInput
				value={tel.value}
				onBlur={e => tel.onBlur(e)}
				onChange={e => tel.onChange(e)}
				type='tel'
				variant='small'
				placeholder='Введите ваш телефон'
			/>
			{validationsBlock(tel)}
			<MyInput
				value={link.value}
				onBlur={e => link.onBlur(e)}
				onChange={e => link.onChange(e)}
				type='text'
				variant='small'
				placeholder='Ссылка на соц.сети (VK/INST/TG)'
			/>
			{validationsBlock(link)}
			<MyButton onClick={handleSubmit} type='submit' variant='btnBorder'>
				Отправить заявку
			</MyButton>
			<ToastContainer />
		</form>
	)
}
