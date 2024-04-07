import classNames from 'classnames/bind';
import styles from './RightPanel.module.scss';
import { useCallback, useState } from 'react';

import FileList from '../FileList';
import Button from '../Button';
import plus from '../../../assets/icons/plus.svg';
import convert from '../../../assets/icons/logo.svg';
import x from '../../../assets/icons/x.svg';
import copy from '../../../assets/icons/copy.svg';
import download from '../../../assets/icons/download.svg';

const cx = classNames.bind(styles);

function RightPanel() {
	const [fileList, setFileList] = useState<Array<File>>([]);

	const handleRemoveItem = useCallback(
		(idx: number) => {
			let removedArray = [...fileList];
			removedArray.splice(idx, 1);

			setFileList(removedArray);
		},
		[fileList]
	);

	return (
		<div className={cx('Right--Wrapper')}>
			<div className={cx('Stack--Wrapper')}>
				<p className={cx('Stack__Title')}>File list</p>
				<FileList
					fileList={fileList}
					nullText="Hummm... there's nothing here. Click Add More! or Paste a
					picture to convert it!"
					handleRemoveItem={handleRemoveItem}
				/>

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
				<FileList fileList={[]} nullText='Empty' />
				<div className={cx('Result--Utils')}>
					<Button text='Copy' iconSrc={copy} />
					<Button text='Download' iconSrc={download} />
				</div>
			</div>
		</div>
	);
}

export default RightPanel;
