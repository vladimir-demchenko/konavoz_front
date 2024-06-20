"use client"

import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Checkbox } from '@/shared/ui/Checkbox'
import { Input } from '@/shared/ui/Input'

import cls from './DeliveryRequestForm.module.scss';
import classNames from 'classnames';

export const DeliveryRequestForm = ({ className }: { className?: string }) => {
  return (
    <form className={classNames(cls.form, className)}>
      <Input placeholder='Имя' />
      <Input placeholder='Телефон' />
      <Checkbox>Даю согласие на обработку Персональных данных</Checkbox>
      <Button theme={ButtonTheme.WHITE_FULL_FILLED}>Отправить заявку</Button>
    </form>
  )
}