"use client"

import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Checkbox } from '@/shared/ui/Checkbox'
import { Input } from '@/shared/ui/Input'
import InputMask from 'react-input-mask';

import cls from './DeliveryRequestForm.module.scss';
import classNames from 'classnames';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { useToast } from '@/shared/ui/Toast';

interface FormData {
  name: string;
  phone: string;
  confirm: string;
}

export const DeliveryRequestForm = ({ className }: { className?: string }) => {
  const { control, register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const { toaster, Toaster } = useToast();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    axios.post(`${process.env.NEXT_PUBLIC_BASE_API}/delivery`, data).then(() => {
      toaster.create({
        title: 'Заявка отправлена!',
        description: `Ваша заявка успешно отправлена`,
        type: 'success'
      })
    })
  }

  return (
    <form className={classNames(cls.form, className)} onSubmit={handleSubmit(onSubmit)}>
      <input className={classNames(cls.input, cls.white)} placeholder='Имя' {...register('name')} />
      <InputMask mask={'+7 999 999-99-99'} className={classNames(cls.input, cls.white)} placeholder='Телефон' {...register('phone', { required: true })} />
      <Checkbox {...register('confirm', { required: true })}>Даю согласие на обработку <a href='/privacy' target='_blank' className={cls.link}>Персональных данных</a></Checkbox>
      <Button theme={ButtonTheme.WHITE} type='submit'>Отправить заявку</Button>
      {Toaster}
    </form>
  )
}