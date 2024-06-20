import { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';
import classNames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = (props: InputProps) => {
  const {
    className,
    ...otherProps
  } = props;

  return (
    <input className={classNames(cls.input, className)} type="text" {...otherProps} />
  )
}