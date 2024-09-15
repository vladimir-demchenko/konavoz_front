"use client"

import { Button, ButtonTheme } from '@/shared/ui/Button';
import InputMask from 'react-input-mask';

import { useProductStore } from '@/providers/store-provider';
import { useToast } from '@/shared/ui/Toast';
import axios from 'axios';
import classNames from 'classnames';
import { useLayoutEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import cls from './CartForm.module.scss';

interface FormData {
  name: string;
  phone: string;
}


export const CartForm = ({ className, setContent }: { className?: string, setContent: (...args: any[]) => void }) => {
  const { control, register, handleSubmit } = useForm<FormData>();
  const { items } = useProductStore((state) => state);
  const { toaster, Toaster } = useToast();
  const windowRef = useRef<Window | null>(null);
  const amount = Object.values(items).reduce((acc, cur) => acc + (cur.quantity * cur.product.price), 0)

  useLayoutEffect(() => {
    windowRef.current = window;
  }, [])

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
      setContent('success')
    })
  }

  console.log(windowRef.current)

  return (
    <form className={classNames(cls.form, className)} onSubmit={handleSubmit(onSubmit)}>
      <input className={classNames(cls.input, cls.black)} placeholder='Имя' {...register('name')} />
      <InputMask mask={'+7 999 999-99-99'} className={classNames(cls.input, cls.black)} placeholder='Телефон' {...register('phone', { required: true })} />
      {/*@ts-ignore */}
      <Button onClick={() => window.ym(98038876, 'reachGoal', 'Order')} type='submit' theme={ButtonTheme.BROWN_FULL_FILLED}>Оформить заказ</Button>
      {Toaster}
    </form>
  )
}