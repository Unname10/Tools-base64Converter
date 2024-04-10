import { memo } from 'react';
import classNames from 'classnames/bind';

import ColorDot from '../../../assets/icons/ColorDot';
import styles from './FileList.module.scss';
import dot from '../../../assets/icons/dot.svg';

import humanFileSize from '../../../utils/humanFileSize';
import FileItem from './FileItem';
import TextItem from './TextItem';
import { textObject } from './TextItem';

const cx = classNames.bind(styles);

function FileList({
	fileList = [],
	textList = [],
	handleRemoveItem = () => {},
	nullText = '',
}: {
	nullText?: string;
	handleRemoveItem?: Function;
} & (
	| {
			fileList?: File[];
			textList: textObject[];
	  }
	| {
			fileList: File[];
			textList?: textObject[];
	  }
)) {
	return (
		<div className={cx('FileList--Wrapper')}>
			<div className={cx('FileList--Header')}>
				<div className={cx('FileList--Header__there_dots')}>
					<ColorDot color='#ff5255' />
					<ColorDot color='#febf43' />
					<ColorDot color='#19ce4b' />
				</div>
				{`${Math.abs(fileList.length - textList.length)} File(s)`}
				{textList.length == 0 && fileList.length != 0 && (
					<>
						<img src={dot} />
						{`${humanFileSize(
							fileList.reduce(
								(total, currentFile) =>
									currentFile.size + total,
								0
							)
						)} total`}
					</>
				)}
			</div>

			{fileList.length > 0 && (
				<FileItem
					fileList={fileList}
					handleRemoveItem={handleRemoveItem}
				/>
			)}

			{textList.length > 0 && <TextItem textList={textList} />}

			{fileList.length === 0 && textList.length === 0 && (
				<div className={cx('FileList--NullContent')}>{nullText}</div>
			)}
		</div>
	);
}

export default memo(FileList);
