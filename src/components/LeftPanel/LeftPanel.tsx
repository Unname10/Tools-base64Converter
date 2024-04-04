import classNames from 'classnames/bind';
import styles from './LeftPanel.module.scss';

import ImageIcon from '../../../assets/icons/ImageIcon';

const cx = classNames.bind(styles);

function LeftPanel() {
	return (
		<div className={cx('Left--Wrapper')}>
			<div className={cx('Navbar')}>
				<div className={cx('Navbar--Logo')}>Base64 Converter</div>
				<div className={cx('Navbar--Menu')}>
					<a
						className={cx('Navbar--Menu__Items')}
						href='https://github.com/Unname10/Tools-base64Converter'
					>
						Github
					</a>
				</div>
			</div>
			<div className={cx('Preview')}>
				<div className={cx('Preview--Main_Text')}>
					Base64 <br /> Converter
				</div>
				<div className={cx('Preview--Sub_Text')}>
					Simple tools to convert image to base64 format!
				</div>
			</div>
			<div className={cx('Footer')}>
				<ImageIcon
					fill='#f57aab'
					className={cx('Footer--decoration')}
					style={{
						transform: 'rotate(35deg)',
						opacity: '0.7',
					}}
				/>
				<ImageIcon
					fill='#f7d145'
					className={cx('Footer--decoration')}
					style={{
						translate: '200px 50px',
						transform: 'rotate(10deg)',
						opacity: '0.9',
						zIndex: '-3',
					}}
				/>
				<ImageIcon
					fill='#a35db1'
					className={cx('Footer--decoration')}
					style={{
						translate: '350px -30px',
						transform: 'rotate(340deg)',
						opacity: '0.8',
						zIndex: -1,
					}}
				/>
			</div>
		</div>
	);
}

export default LeftPanel;
