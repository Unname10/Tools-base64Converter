import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { MouseEventHandler } from 'react';

const cx = classNames.bind(styles);

function Button({
	text = '',
	iconSrc = '',
	btnClassName = '',
	onClick = () => {},
	htmlFor = '',
}: {
	text?: string;
	iconSrc?: string;
	btnClassName?: string;
	onClick?: MouseEventHandler;
	htmlFor?: string;
}) {
	if (htmlFor === '')
		return (
			<button className={cx('Button', btnClassName)} onClick={onClick}>
				{iconSrc !== '' && (
					<img src={iconSrc} alt='I' className={cx('Button__icon')} />
				)}
				<span>{text}</span>
			</button>
		);
	else
		return (
			<label
				className={cx('Button', btnClassName)}
				onClick={onClick}
				htmlFor={htmlFor}
			>
				{iconSrc !== '' && (
					<img src={iconSrc} alt='I' className={cx('Button__icon')} />
				)}
				<span>{text}</span>
			</label>
		);
}

export default Button;
