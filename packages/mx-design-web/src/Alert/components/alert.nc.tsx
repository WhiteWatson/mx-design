import React, { forwardRef, useContext, useState } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { ConfigContext } from '../../ConfigProvider';
import { IconClose } from '../../Icon';
import { useClassNames, useStyles } from '../hooks';
import { renderIcon } from '../../Common/renderIcon';
// type
import type { AlertProps } from '../interface';

type IAlertProps = AlertProps & { _onClose?: (...args: any) => void };

const defaultProps = {
  type: 'info' as const,
  showIcon: true,
};

function AlertNc(baseProps: IAlertProps, ref) {
  // props
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<IAlertProps>(baseProps, defaultProps, componentConfig?.Alert);
  const {
    icon,
    type,
    style,
    title,
    content,
    operation,
    closable,
    showIcon,
    className,
    themeStyle,
    onClose,
    _onClose = () => {
      setShow(false);
    },
  } = props;

  // state
  const [isShow, setShow] = useState(true);

  // classnames
  const { iconClassNames, leftClassName, rightClassName, titleClassName, contentClassName, closeBtnClassName, itemClassNames } =
    useClassNames({ getPrefixCls, type, closable, className });

  // style
  const { wrapperStyle } = useStyles({ style, themeStyle });

  return (
    <>
      {isShow && (
        <div className={itemClassNames} style={wrapperStyle} role="alert" ref={ref}>
          {showIcon && <div className={leftClassName}>{renderIcon({ showIcon, type, icon, iconClassNames })}</div>}
          <div className={rightClassName}>
            {title && <div className={titleClassName}>{title}</div>}
            <div className={contentClassName}>
              {content}
              {operation}
            </div>
          </div>
          {closable && (
            <IconClose
              className={closeBtnClassName}
              onClick={() => {
                _onClose?.();
                onClose?.();
              }}
            />
          )}
        </div>
      )}
    </>
  );
}

const AlertComponent = forwardRef(AlertNc);
AlertComponent.displayName = 'NotificationCardComponent';

export { AlertComponent as AlertNc };
