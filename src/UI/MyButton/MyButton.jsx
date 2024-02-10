import classNames from 'classnames';
import bt from './MyButton.module.scss';

export const MyButton = ({ variant, children, ...props }) => {
	const className = classNames({
		[bt.btnBackground]: variant === 'btnBackground',
		[bt.btnBorder]: variant === 'btnBorder',
	});

	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};
