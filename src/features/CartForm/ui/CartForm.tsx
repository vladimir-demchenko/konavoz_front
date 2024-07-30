"use client"

import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Checkbox } from '@/shared/ui/Checkbox'
import { Input } from '@/shared/ui/Input'
import InputMask from 'react-input-mask';

import cls from './CartForm.module.scss';
import classNames from 'classnames';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useProductStore } from '@/providers/store-provider';

interface FormData {
  name: string;
  phone: string;
}


export const CartForm = ({ className }: { className?: string }) => {
  const { control, register, handleSubmit } = useForm<FormData>();
  const { items } = useProductStore((state) => state);
  const amount = Object.values(items).reduce((acc, cur) => acc + (cur.quantity * cur.product.price), 0)

  const onSubmit: SubmitHandler<FormData> = (data) => {
    axios.post(`${process.env.NEXT_PUBLIC_BASE_API}/order`, {
      name: data.name,
      phone: data.phone,
      amount,
      items
    })
  }

  return (
    <form className={classNames(cls.form, className)} onSubmit={handleSubmit(onSubmit)}>
      <input className={classNames(cls.input, cls.black)} placeholder='Имя' {...register('name')} />
      <InputMask mask={'+7 999 999-99-99'} className={classNames(cls.input, cls.black)} placeholder='Телефон' {...register('phone', { required: true })} />
      <Button type='submit' theme={ButtonTheme.BROWN_FULL_FILLED}>Оформить заказ</Button>
    </form>
  )
}