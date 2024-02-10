import classNames from 'classnames';
import ip from './MyInput.module.scss';

export const MyInput = ({ variant, style, ...props }) => {
	const classInput = classNames({
		[ip.inputBig]: variant === 'big',
		[ip.inputSmall]: variant === 'small',
	});

	return <input {...props} style={style} className={classInput} />;
};
