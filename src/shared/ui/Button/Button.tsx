import { ButtonHTMLAttributes, ReactNode } from 'react';

import cls from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  disable?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    disabled,
    ...otherProps
  } = props;

  return (
    <button
      type='button'
      className={classNames([cls.button, className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
}