import React from 'react';

function ColorDot({
	color = '#000',
	className = '',
}: {
	color?: string;
	className?: string;
}) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 512 512'
			className={className}
		>
			<path
				fill={color}
				d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z'
			/>
		</svg>
	);
}

export default ColorDot;
