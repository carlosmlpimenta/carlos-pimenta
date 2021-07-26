import { InferPropTypes, childrenType } from '@libs/@types/propTypes';
import PropTypes, { InferProps } from 'prop-types';

import { eS } from '@libs/scripts/strings';
import { forwardRef } from 'react';
import styles from './Flex.module.css';

export const alignEnum = ['start', 'center', 'end'] as const;

export const justifyEnum = [
	'start',
	'center',
	'end',
	'around',
	'between',
	'evenly'
] as const;

export const flexPropTypes = {
	forwardedRef: PropTypes.any,
	id: PropTypes.string,
	title: PropTypes.string,
	style: PropTypes.any,
	className: PropTypes.string,
	align: PropTypes.oneOf(alignEnum),
	justify: PropTypes.oneOf(justifyEnum),
	onClick: PropTypes.func,
	draggable: PropTypes.bool,
	children: childrenType
};

export const flexDefaultProps = {
	align: 'start' as const,
	justify: 'start' as const
};

export const flexCenterDefaultProps = {
	align: 'center' as const,
	justify: 'center' as const
};

/*
    --------
    FlEX ROW
    --------
*/

function FlexRowFunc({
	forwardedRef,
	id,
	title,
	style,
	className,
	align,
	justify,
	onClick,
	draggable,
	children
}: InferPropTypes<typeof flexPropTypes, typeof flexDefaultProps>) {
	return (
		<div
			{...{ id, style, onClick, title, draggable }}
			ref={forwardedRef}
			className={`${styles.base} ${styles.row} ${styles[`align-${align}`]} ${
				styles[`justify-${justify}`]
			} ${eS(className)}`}
		>
			{children}
		</div>
	);
}

FlexRowFunc.propTypes = flexPropTypes;
FlexRowFunc.defaultProps = flexDefaultProps;

export const FlexRow = forwardRef(
	(props: InferProps<typeof flexPropTypes>, ref) => (
		<FlexRowFunc forwardedRef={ref} {...props} />
	)
);

/*
    --------
    FlEX COL
    --------
*/

function FlexColFunc({
	forwardedRef,
	id,
	title,
	style,
	className,
	align,
	justify,
	onClick,
	draggable,
	children
}: InferPropTypes<typeof flexPropTypes, typeof flexDefaultProps>) {
	return (
		<div
			{...{ id, style, onClick, title, draggable }}
			ref={forwardedRef}
			className={`${styles.base} ${styles.col} ${styles[`align-${align}`]} ${
				styles[`justify-${justify}`]
			} ${eS(className)}`}
		>
			{children}
		</div>
	);
}

FlexColFunc.propTypes = flexPropTypes;
FlexColFunc.defaultProps = flexDefaultProps;

export const FlexCol = forwardRef(
	(props: InferProps<typeof flexPropTypes>, ref) => (
		<FlexColFunc forwardedRef={ref} {...props} />
	)
);

/*
    ---------------
    FlEX ROW CENTER
    ---------------
*/

function FlexRowCenterFunc({
	forwardedRef,
	id,
	title,
	style,
	className,
	align,
	justify,
	onClick,
	draggable,
	children
}: InferPropTypes<typeof flexPropTypes, typeof flexCenterDefaultProps>) {
	return (
		<div
			{...{ id, style, onClick, title, draggable }}
			ref={forwardedRef}
			className={`${styles.base} ${styles.row} ${styles[`align-${align}`]} ${
				styles[`justify-${justify}`]
			} ${eS(className)}`}
		>
			{children}
		</div>
	);
}

FlexRowCenterFunc.propTypes = flexPropTypes;
FlexRowCenterFunc.defaultProps = flexCenterDefaultProps;

export const FlexRowCenter = forwardRef(
	(props: InferProps<typeof flexPropTypes>, ref) => (
		<FlexRowCenterFunc forwardedRef={ref} {...props} />
	)
);

/*
    ---------------
    FlEX COL CENTER
    ---------------
*/

function FlexColCenterFunc({
	forwardedRef,
	id,
	title,
	style,
	className,
	align,
	justify,
	onClick,
	draggable,
	children
}: InferPropTypes<typeof flexPropTypes, typeof flexCenterDefaultProps>) {
	return (
		<div
			{...{ id, style, onClick, title, draggable }}
			ref={forwardedRef}
			className={`${styles.base} ${styles.col} ${styles[`align-${align}`]} ${
				styles[`justify-${justify}`]
			} ${eS(className)}`}
		>
			{children}
		</div>
	);
}

FlexColCenterFunc.propTypes = flexPropTypes;
FlexColCenterFunc.defaultProps = flexCenterDefaultProps;

export const FlexColCenter = forwardRef(
	(props: InferProps<typeof flexPropTypes>, ref) => (
		<FlexColCenterFunc forwardedRef={ref} {...props} />
	)
);
