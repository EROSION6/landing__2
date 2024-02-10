import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const successfully = () =>
	toast.success('Вы успешно! Заполнили заявку', {
		position: 'top-right',
		autoClose: 5000,
		draggable: true,
		theme: 'light',
	});

export const refusal = () =>
	toast.error('Вы не до конца заполнили форму', {
		position: 'top-right',
		autoClose: 5000,
		draggable: true,
		theme: 'light',
	});



  