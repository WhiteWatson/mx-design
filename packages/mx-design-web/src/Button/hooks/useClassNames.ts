import { ReactNode, useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
import { ConfigProviderProps } from '../../ConfigProvider';
import { ButtonProps } from '../interface';

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
  long: ButtonProps['long'];
  children: ButtonProps['children'];
  status: ButtonProps['status'];
  loading: ButtonProps['loading'];
  iconOnly: ButtonProps['iconOnly'];
  disabled: ButtonProps['disabled'];
  className: ButtonProps['className'];
  iconNode: ReactNode;
  type: ButtonProps['type'];
}

export function useClassNames(props: getClassNamesProps) {
  const { long, status, loading, children, iconOnly, disabled, className, iconNode, type, getPrefixCls } = props;
  const prefixCls = getPrefixCls('btn');

  return useMemo(
    () => ({
      prefixCls,
      wrapperCls: cs(
        prefixCls,
        `${prefixCls}-${type}`,
        {
          [`${prefixCls}-long`]: long,
          [`${prefixCls}-status-${status}`]: status,
          [`${prefixCls}-icon-only`]: iconOnly || (!children && children !== 0 && iconNode),
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-loading`]: loading,
          [`${prefixCls}-down`]: !disabled && !loading,
          [`${prefixCls}-scale`]: !disabled && !loading,
        },
        className
      ),
    }),
    [type, children, className, disabled, iconNode, iconOnly, loading, long, prefixCls, status]
  );
}
