import classNames from 'classnames/bind';
import styles from './FileList.module.scss';

import dot from '../../../assets/icons/dot.svg';
import image_file from '../../../assets/icons/image_file.svg';
import text_file from '../../../assets/icons/text_file.svg';
import other_file from '../../../assets/icons/file.svg';
import x_mark from '../../../assets/icons/x_mark.svg';
import humanFileSize from '../../../utils/humanFileSize';

const cx = classNames.bind(styles);

const getFileType = (file: File) => {
	if (file.type.match('image.*')) return image_file;
	else if (file.type.match('text.*')) return text_file;
	else return other_file;
};

function FileItem({
	fileList,
	handleRemoveItem = () => {},
}: {
	fileList: Array<File>;
	handleRemoveItem?: Function;
}) {
	return (
		<div className={cx('FileList--Content')}>
			{fileList.map((file, idx) => (
				<div className={cx('FileList--Items')} key={idx}>
					<div className={cx('FileList--Items__Content')}>
						<img
							className={cx('FileList--Items__icons')}
							src={getFileType(file)}
						/>
						<p className={cx('FileList--Items__name')}>
							{file.name}
						</p>
						<img className={cx('FileList--Items__dot')} src={dot} />
						<p className={cx('FileList--Items__size')}>
							{humanFileSize(file.size)}
						</p>
					</div>
					<div className={cx('FileList--Items__utils')}>
						<img
							title='Remove'
							className={cx('Utils--Items')}
							src={x_mark}
							onClick={() => {
								handleRemoveItem(idx);
							}}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
export default FileItem;
