import classNames from 'classnames/bind';

import ColorDot from '../../../assets/icons/ColorDot';
import styles from './FileList.module.scss';
import dot from '../../../assets/icons/dot.svg';

const cx = classNames.bind(styles);

function FileList({ fileList }: { fileList: Array<File> }) {
	return (
		<div className={cx('FileList--Wrapper')}>
			<div className={cx('FileList--Header')}>
				<div className={cx('FileList--Header__there_dots')}>
					<ColorDot color='#ff5255' />
					<ColorDot color='#febf43' />
					<ColorDot color='#19ce4b' />
				</div>
				{`${fileList.length} File(s)`}
				<img src={dot} />
				{`${fileList.reduce(
					(total, currentFile) => currentFile.size + total,
					0
				)} KB total`}
			</div>

			{/* {fileLists.map((file, idx) => (
			<div className={cx('FileList--items')} key={idx}>
				<img
					className={cx('FileList--Items__icons')}
					src={getFileType(file)}
				/>
				<p className={cx('FileList--Items__name')}>
					{file.name}
				</p>
				<p className={cx('FileList--Items__size')}>
					{file.size}
				</p>
				<img
					className={cx('FileList--Items__remove')}
					src={xmark}
				/>
			</div>
		))} */}
			{fileList.length === 0 && (
				<div className={cx('FileList--NullContent')}>
					Hummm... there's nothing here. Click Add More! or Paste a
					picture to convert it!
				</div>
			)}
		</div>
	);
}

export default FileList;
