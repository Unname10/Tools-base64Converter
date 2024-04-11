import classNames from 'classnames/bind';
import styles from './RightPanel.module.scss';
import { useCallback, useEffect, useState } from 'react';

import FileList from '../FileList';
import Button from '../Button';
import plus from '../../../assets/icons/plus.svg';
import convert from '../../../assets/icons/logo.svg';
import x from '../../../assets/icons/x.svg';
import { textObject } from '../FileList/TextItem';

import convertFileToBase64 from '../../../utils/convertFileToBase64';

const cx = classNames.bind(styles);

function RightPanel() {
	const [fileList, setFileList] = useState<File[]>([]);
	const [textFileList, setTextFileList] = useState<Array<textObject>>([]);

	useEffect(() => {
		// Drag and drop, copy and paste to upload files Functions
		const dragoverPreventDefault = (e: DragEvent) => {
			e.preventDefault();
		};
		const dragAndDrop = (e: DragEvent) => {
			const inputElement = document.getElementById(
				'uploadFile'
			) as HTMLInputElement;
			e.preventDefault();
			if (!!inputElement && e.dataTransfer?.files.length) {
				setFileList([...fileList, ...e.dataTransfer.files]);
			}
		};
		const copyAndPaste = (e: ClipboardEvent) => {
			const inputElement = document.getElementById(
				'uploadFile'
			) as HTMLInputElement;
			if (!!inputElement && e.clipboardData?.files.length) {
				setFileList([...fileList, ...e.clipboardData.files]);
			}
		};

		document.addEventListener('dragover', dragoverPreventDefault);
		document.addEventListener('drop', dragAndDrop);
		window.addEventListener('paste', copyAndPaste);

		return () => {
			// Cleanup when updating fileList
			document.removeEventListener('dragover', dragoverPreventDefault);
			document.removeEventListener('drop', dragAndDrop);
			window.removeEventListener('paste', copyAndPaste);
		};
	}, [fileList]);

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
							setFileList([
								...fileList,
								...(e.target.files ?? []),
							]);
						}}
						multiple
						onClick={(e) => {
							e.currentTarget.value = '';
						}}
					/>

					<Button
						text={fileList.length == 0 ? 'Add' : 'Add more!'}
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
					<Button
						text='Convert'
						iconSrc={convert}
						onClick={async () => {
							let result = [];
							for (let i = 0; i < fileList.length; i++) {
								const file = fileList[i];
								const nameWithoutExtension = file.name
									.split('.')
									.slice(0, -1)
									.join('.');
								result.push({
									content: await convertFileToBase64(file),
									size: file.size,
									name: `${
										nameWithoutExtension !== ''
											? nameWithoutExtension
											: file.name
									}.txt`,
								});
							}
							setTextFileList(result);
						}}
					/>
				</div>
			</div>

			<hr style={{ margin: '25px 10px', opacity: '.1' }} />

			<div className={cx('Result')}>
				<p className={cx('Result--Title')}>Result</p>
				<FileList textList={textFileList} nullText='Empty' />
			</div>
		</div>
	);
}

export default RightPanel;
