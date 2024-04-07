import classNames from 'classnames/bind';
import styles from './LeftPanel.module.scss';

import image_file from '../../../assets/icons/image_file.svg';
import text_file from '../../../assets/icons/text_file.svg';
import file from '../../../assets/icons/file.svg';

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
			<div className={cx('Banner')}>
				<div className={cx('Banner--Main_Text')}>
					Base64 <br /> Converter
				</div>
				<div className={cx('Banner--Sub_Text')}>
					Simple tools to convert image to base64 format!
				</div>
			</div>
			<div className={cx('Footer')}>
				<img
					src={image_file}
					className={cx('Footer--decoration')}
					style={{
						transform: 'rotate(35deg)',
						opacity: '0.7',
					}}
				/>

				<img
					src={text_file}
					className={cx('Footer--decoration')}
					style={{
						translate: '200px 20px',
						transform: 'rotate(10deg)',
						opacity: '0.9',
						zIndex: '-3',
					}}
				/>

				<img
					src={file}
					className={cx('Footer--decoration')}
					style={{
						translate: '350px 100px',
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
