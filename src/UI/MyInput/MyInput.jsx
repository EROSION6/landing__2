import classNames from 'classnames'
import ip from './MyInput.module.scss'

export const MyInput = ({ onBlur, variant, name, style, ...props }) => {
	const classInput = classNames({
		[ip.inputBig]: variant === 'big',
		[ip.inputSmall]: variant === 'small',
	})

	return (
		<>
			<input
				{...props}
				onBlur={onBlur}
				name={name}
				style={style}
				className={classInput}
			/>
		</>
	)
}
