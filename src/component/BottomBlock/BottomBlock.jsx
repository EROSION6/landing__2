import "./BottomBlock.scss"
import { MyInput } from '../../UI/index'


export const BottomBlock = ({ value, setValue }) => {
	return (
		<div className='form'>
			<MyInput
				value={value.link}
				onChange={e => setValue({ ...value, link: e.target.value })}
				type='text'
				variant='big'
				placeholder='Ссылка на товар'
			/>
			<MyInput
				value={value.social}
				onChange={e => setValue({ ...value, social: e.target.value })}
				type='text'
				variant='big'
				placeholder='Ссылка на соц.сети (VK/INST/TG)'
			/>
		</div>
	)
}
