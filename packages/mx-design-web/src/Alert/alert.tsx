import React, { forwardRef, useContext, useState } from 'react';
import { ConfigContext } from '../ConfigProvider';
import { IconClose } from '../Icon';
import { useClassNames } from './hooks';
import { useMergeProps } from '@mx-design/hooks';
import { renderIcon } from '../Common/renderIcon';
// type
import type { AlertProps } from './interface';
type IAlertProps = AlertProps & { _onClose?: (...args: any) => void };

const defaultProps = {
  type: 'info' as const,
  showIcon: true,
};

function Alert(baseProps: IAlertProps, ref) {
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

  return (
    <>
      {isShow && (
        <div className={itemClassNames} style={style} role="alert" ref={ref}>
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

const AlertComponent = forwardRef(Alert);
AlertComponent.displayName = 'NotificationCardComponent';

export default AlertComponent;
