import { MyInput } from '../../UI/index'
import './TopBlock.scss'

export const TopBlock = ({ value, setValue }) => {
	return (
		<div className='top'>
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
				type='text'
				variant='small'
				placeholder='Введите ваш телефон'
			/>
		</div>
	)
}
