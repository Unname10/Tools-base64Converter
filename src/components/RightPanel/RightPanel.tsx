import classNames from 'classnames/bind';
import styles from './RightPanel.module.scss';
import { useEffect, useState } from 'react';

import FileList from '../FileList';
import Button from '../Button';
// import imagefile from '../../../assets/icons/imagefile.svg';
// import textfile from '../../../assets/icons/textfile.svg';
// import otherfile from '../../../assets/icons/file.svg';
import plus from '../../../assets/icons/plus.svg';
import convert from '../../../assets/icons/logo.svg';
import x from '../../../assets/icons/x.svg';
import copy from '../../../assets/icons/copy.svg';
import download from '../../../assets/icons/download.svg';

const cx = classNames.bind(styles);

// const getFileType = (file: File) => {
// 	if (file.type.match('image.*')) return imagefile;
// 	else if (file.type.match('text.*')) return textfile;
// 	else return otherfile;
// };

function RightPanel() {
	const [fileList, setFileList] = useState<Array<File>>([]);

	useEffect(() => {}, [fileList]);

	return (
		<div className={cx('Right--Wrapper')}>
			<div className={cx('Stack--Wrapper')}>
				<p className={cx('Stack__Title')}>File list</p>
				<FileList fileList={fileList} />

				<div className={cx('Stack--Function')}>
					<input
						id='uploadFile'
						type='file'
						style={{ display: 'none' }}
						onChange={(e) => {
							setFileList([...(e.target.files ?? [])]);
						}}
						multiple
					/>

					<Button
						text='Add More!'
						iconSrc={plus}
						htmlFor='uploadFile'
					/>
					{fileList.length !== 0 && (
						<Button
							text='Clear'
							iconSrc={x}
							onClick={() => {
								setFileList([]);
							}}
						/>
					)}
					<Button text='Convert' iconSrc={convert} />
				</div>
			</div>

			<hr style={{ margin: '25px 10px', opacity: '.1' }} />

			<div className={cx('Result')}>
				<p className={cx('Result--Title')}>Result</p>
				<FileList fileList={[]} />
				<div className={cx('Result--Utils')}>
					<Button text='Copy' iconSrc={copy} />
					<Button text='Download' iconSrc={download} />
				</div>
			</div>
		</div>
	);
}

export default RightPanel;
