import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const successfully = () =>
	toast.success('Вы успешно! Заполнили заявку', {
		position: 'top-right',
		autoClose: 5000,
		draggable: true,
		theme: 'light',
	})

export const refusal = () =>
	toast.error('Вы некорректно заполнили поля', {
		position: 'top-right',
		autoClose: 5000,
		draggable: true,
		theme: 'light',
	})
