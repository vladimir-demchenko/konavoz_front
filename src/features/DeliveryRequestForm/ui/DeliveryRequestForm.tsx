"use client"

import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Checkbox } from '@/shared/ui/Checkbox'
import { Input } from '@/shared/ui/Input'
import InputMask from 'react-input-mask';

import cls from './DeliveryRequestForm.module.scss';
import classNames from 'classnames';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

interface FormData {
  name: string;
  phone: string;
  confirm: string;
}

export const DeliveryRequestForm = ({ className }: { className?: string }) => {
  const { control, register, handleSubmit, formState: { errors } } = useForm<FormData>();
  console.log(process.env.NEXT_PUBLIC_BASE_API)
  const onSubmit: SubmitHandler<FormData> = (data) => {
    axios.post(`${process.env.NEXT_PUBLIC_BASE_API}/delivery`, data)
  }

  return (
    <form className={classNames(cls.form, className)} onSubmit={handleSubmit(onSubmit)}>
      <input className={classNames(cls.input, cls.white)} placeholder='Имя' {...register('name')} />
      <InputMask mask={'+7 999 999-99-99'} className={classNames(cls.input, cls.white)} placeholder='Телефон' {...register('phone', { required: true })} />
      <Checkbox {...register('confirm', { required: true })}>Даю согласие на обработку Персональных данных</Checkbox>
      <Button theme={ButtonTheme.WHITE} type='submit'>Отправить заявку</Button>
    </form>
  )
}