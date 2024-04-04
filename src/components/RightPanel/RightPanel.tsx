import classNames from 'classnames/bind';
import styles from './RightPanel.module.scss';
import { useState } from 'react';

import xmark from '../../../assets/icons/xmark.svg';
import imagefile from '../../../assets/icons/imagefile.svg';
import textfile from '../../../assets/icons/textfile.svg';
import otherfile from '../../../assets/icons/file.svg';

const cx = classNames.bind(styles);

const getFileType = (file: File) => {
	if (file.type.match('image.*')) return imagefile;
	else if (file.type.match('text.*')) return textfile;
	else return otherfile;
};

function RightPanel() {
	const [mode, setMode] = useState<number>(0);
	const [fileLists, setFileLists] = useState<Array<File>>([]);

	const ModeList = [
		{ title: 'Image to Base64' },
		{ title: 'Text to Base64' },
		{ title: 'Other' },
	];

	return (
		<div className={cx('Right--Wrapper')}>
			<div className={cx('Header')}>
				<div className={cx('Header--Mode_Switcher')}>
					{ModeList.map((modeItem, idx) => (
						<div
							className={cx('Header--Mode_Switcher__items', {
								active: idx === mode,
							})}
							onClick={() => {
								setMode(idx);
							}}
							key={idx}
						>
							{modeItem.title}
						</div>
					))}
				</div>
				<div className={cx('Header--Stack')}>
					{fileLists.map((file, idx) => (
						<div className={cx('Header--Stack_items')} key={idx}>
							<img
								className={cx('Stack--Items__icons')}
								src={getFileType(file)}
							/>
							<p className={cx('Stack--Items__name')}>
								{file.name}
							</p>
							<p className={cx('Stack--Items__size')}>
								{file.size}
							</p>
							<img
								className={cx('Stack--Items__remove')}
								src={xmark}
							/>
						</div>
					))}

					<div className={cx('Header--Stack__addBtn')}>Add More!</div>
					<div className={cx('Header--Stack__convertBtn')}>
						Convert
					</div>
				</div>
			</div>
			<div className={cx('Result')}>
				<div className={cx('Result--Viewer')}>Nothing here...</div>
				<div className={cx('Result--Utils')}>
					<div className={cx('Result--Utils__items')}>Copy</div>
					<div className={cx('Result--Utils__items')}>Download</div>
					<div className={cx('Result--Utils__items')}>Clear</div>
				</div>
			</div>
		</div>
	);
}

export default RightPanel;
