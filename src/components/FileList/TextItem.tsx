import classNames from 'classnames/bind';

import styles from './FileList.module.scss';

import download from '../../../assets/icons/download_black.svg';
import copy from '../../../assets/icons/copy_black.svg';
import text_file from '../../../assets/icons/text_file.svg';
import check from '../../../assets/icons/check.svg';

import downloadTextAsFile from '../../../utils/downloadTextAsFile';

const cx = classNames.bind(styles);

export interface textObject {
	content: string;
	name: string;
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
					</div>

					<div className={cx('FileList--Items__utils')}>
						<img
							title='Copy'
							className={cx('Utils--Items')}
							src={copy}
							onClick={(e) => {
								navigator.clipboard.writeText(file.content);
								(e.target as HTMLImageElement).src = check;
								setTimeout(() => {
									(e.target as HTMLImageElement).src = copy;
								}, 2000);
							}}
						/>
						<img
							title='Download'
							className={cx('Utils--Items')}
							src={download}
							onClick={() => {
								downloadTextAsFile(file.content, file.name);
							}}
						/>
					</div>
				</div>
			))}
		</div>
	);
}

export default TextItem;
