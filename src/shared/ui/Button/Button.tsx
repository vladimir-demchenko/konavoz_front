import { ButtonHTMLAttributes, ReactNode } from 'react';

import cls from './Button.module.scss';
import classNames from 'classnames';


export enum ButtonTheme {
  WHITE = 'white',
  WHITE_FULL_FILLED = 'whiteFullFilled',
  BROWN = 'brown',
  LIGHT_BROWN = 'lightBrown',
}

export enum ButtonSize {
  XS = 'xs',
  M = 'm'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  disable?: boolean;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    disabled,
    theme = ButtonTheme.BROWN,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const classes = classNames(
    cls.button,
    {
      [cls[theme]]: true,
      [cls[size]]: true,
      [cls.disabled]: disabled
    },
    className
  )

  return (
    <button
      type='button'
      className={classes}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
}