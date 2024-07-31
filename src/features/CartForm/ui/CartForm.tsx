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
import { useToast } from '@/shared/ui/Toast';

interface FormData {
  name: string;
  phone: string;
}


export const CartForm = ({ className }: { className?: string }) => {
  const { control, register, handleSubmit } = useForm<FormData>();
  const { items } = useProductStore((state) => state);
  const { toaster, Toaster } = useToast();
  const amount = Object.values(items).reduce((acc, cur) => acc + (cur.quantity * cur.product.price), 0)

  const onSubmit: SubmitHandler<FormData> = (data) => {
    axios.post(`${process.env.NEXT_PUBLIC_BASE_API}/order`, {
      name: data.name,
      phone: data.phone,
      amount,
      items
    }).then(() => {
      toaster.create({
        title: 'Заказ отправлен!',
        description: `Ваш заказ принят. В ближайшее время с вами свяжется менеджер`,
        type: 'success'
      })
    })
  }

  return (
    <form className={classNames(cls.form, className)} onSubmit={handleSubmit(onSubmit)}>
      <input className={classNames(cls.input, cls.black)} placeholder='Имя' {...register('name')} />
      <InputMask mask={'+7 999 999-99-99'} className={classNames(cls.input, cls.black)} placeholder='Телефон' {...register('phone', { required: true })} />
      <Button type='submit' theme={ButtonTheme.BROWN_FULL_FILLED}>Оформить заказ</Button>
      {Toaster}
    </form>
  )
}