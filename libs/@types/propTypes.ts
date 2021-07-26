import PropTypes from 'prop-types';

export type Keys<T> = keyof T;
export function Keys<T>(o: T) {
  if (!o) {
    return [];
  }
  return Object.keys(o) as Keys<T>[];
}

export type MandateProps<T extends {}, M, K extends keyof T> = Omit<T, K> &
  {
    [MK in K]-?: MK extends keyof M ? T[MK] | M[MK] : T[MK];
  };

export type InferPropTypes<
  PropTypes,
  DefaultProps = {},
  Props = PropTypes.InferProps<PropTypes>
> = MandateProps<
  Props,
  DefaultProps,
  keyof DefaultProps extends keyof Props ? keyof DefaultProps : keyof Props
>;

export const childrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);
