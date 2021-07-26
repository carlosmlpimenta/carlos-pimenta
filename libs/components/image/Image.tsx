import PropTypes, { InferProps } from 'prop-types';

import React from 'react';

function Image({
	forwardedRef,
	alt,
	src,
	className,
	onClick
}: InferProps<typeof Image.propTypes>) {
	return (
		<img
			ref={forwardedRef}
			draggable='false'
			{...{ alt, src, className, onClick }}
		/>
	);
}

Image.propTypes = {
	forwardedRef: PropTypes.any,
	alt: PropTypes.string,
	src: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func
};

export const ForwardImage = React.forwardRef(
	(
		{ alt, src, className, onClick }: InferProps<typeof Image.propTypes>,
		ref
	) => <Image forwardedRef={ref} {...{ alt, src, className, onClick }} />
);

export default Image;
