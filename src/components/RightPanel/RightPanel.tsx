import classNames from 'classnames/bind';
import styles from './RightPanel.module.scss';
import { useState } from 'react';

import xmark from '../../../assets/icons/xmark.svg';
import imagefile from '../../../assets/icons/imagefile.svg';
import textfile from '../../../assets/icons/textfile.svg';
import otherfile from '../../../assets/icons/file.svg';
import plus from '../../../assets/icons/plus.svg';
import convert from '../../../assets/icons/logo.svg';
import dot from '../../../assets/icons/dot.svg';
import x from '../../../assets/icons/x.svg';

import ColorDot from '../../../assets/icons/ColorDot';

const cx = classNames.bind(styles);

const getFileType = (file: File) => {
	if (file.type.match('image.*')) return imagefile;
	else if (file.type.match('text.*')) return textfile;
	else return otherfile;
};

function RightPanel() {
	const [fileLists, setFileLists] = useState<Array<File>>([]);

	return (
		<div className={cx('Right--Wrapper')}>
			<div className={cx('Header')}>
				<div className={cx('Stack--Wrapper')}>
					<p className={cx('Stack__Title')}>File List</p>
					<div className={cx('Stack--Content')}>
						<div className={cx('Stack--Header')}>
							<div className={cx('Stack--Header__there_dots')}>
								<ColorDot color='#ff5255' />
								<ColorDot color='#febf43' />
								<ColorDot color='#19ce4b' />
							</div>
							{`${fileLists.length} File(s)`}
							<img src={dot} />
							{`${fileLists.reduce(
								(total, currentFile) =>
									currentFile.size + total,
								0
							)} KB total`}
						</div>
						{/* {fileLists.map((file, idx) => (
							<div className={cx('Stack--items')} key={idx}>
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
						))} */}
						{fileLists.length === 0 && (
							<div className={cx('Stack--NullContent')}>
								Hummm... there's nothing here. Click Add More!
								or Paste a picture to convert it!
							</div>
						)}
					</div>

					<div className={cx('Stack--Function')}>
						<label
							htmlFor='uploadFile'
							className={cx('Stack--Function__items')}
						>
							<img
								className={cx('Function--Items__icons')}
								src={plus}
							/>
							Add More!
						</label>
						<input
							id='uploadFile'
							type='file'
							style={{ display: 'none' }}
							onChange={(e) => {
								setFileLists([...(e.target.files ?? [])]);
							}}
							multiple
						/>
						{
							<button
								className={cx('Stack--Function__items')}
								onClick={() => {
									setFileLists([]);
								}}
							>
								<img
									className={cx('Function--Items__icons')}
									src={x}
								/>
								Clear
							</button>
						}
						<button className={cx('Stack--Function__items')}>
							<img
								className={cx('Function--Items__icons')}
								src={convert}
							/>
							Convert
						</button>
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
