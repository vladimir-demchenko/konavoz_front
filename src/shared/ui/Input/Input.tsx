import { ChangeEvent, InputHTMLAttributes, forwardRef, useState } from 'react';
import cls from './Input.module.scss';
import classNames from 'classnames';
import { UseFormRegister } from 'react-hook-form';

interface InputProps extends ReturnType<UseFormRegister<FormData>> {
  className?: string;
  color?: "white" | "black";
  placeholder: string;
  required: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    color = 'black',
    placeholder,
    required,
    ...otherProps
  } = props;


  return (
    <input className={classNames(cls.input, className)} type="text" placeholder={placeholder} {...otherProps} />
  )
})