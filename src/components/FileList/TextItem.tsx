import classNames from 'classnames/bind';

import styles from './FileList.module.scss';

import dot from '../../../assets/icons/dot.svg';
import download from '../../../assets/icons/download_black.svg';
import text_file from '../../../assets/icons/text_file.svg';

import humanFileSize from '../../../utils/humanFileSize';
import downloadTextAsFile from '../../../utils/donwloadTextAsFile';

const cx = classNames.bind(styles);

export interface textObject {
	content: string;
	name: string;
	size: number; // TODO: Tí sửa size lại, file sau khi convert có kích thước khác với file ban đầu
}

function TextItem({ textList }: { textList: textObject[] }) {
	return (
		<div className={cx('FileList--Content')}>
			{textList.map((file, idx) => (
				<div className={cx('FileList--Items')} key={idx}>
					<div className={cx('FileList--Items__Content')}>
						<img
							className={cx('FileList--Items__icons')}
							src={text_file}
						/>
						<p className={cx('FileList--Items__name')}>
							{file.name}
						</p>
						<img className={cx('FileList--Items__dot')} src={dot} />
						<p className={cx('FileList--Items__size')}>
							{humanFileSize(file.size)}
						</p>
					</div>
					<img
						className={cx('FileList--Items__utils')}
						src={download}
						onClick={() => {
							downloadTextAsFile(file.content, file.name);
						}}
					/>
				</div>
			))}
		</div>
	);
}

export default TextItem;
