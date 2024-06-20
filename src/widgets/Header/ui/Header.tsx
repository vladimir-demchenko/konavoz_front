"use client"

import Image from 'next/image'
import cls from './Header.module.scss'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'

export const Header = () => {
  return (
    <div className={cls.header}>
      <Image priority height={60} width={135} alt='logo' src='/icons/logo.svg' />
      <nav>
        <ul className={cls.navWrapper}>
          <li><a className={cls.navLink} href="#organic">Органические удобрения</a></li>
          <li><a className={cls.navLink} href="">Грунты</a></li>
          <li><a className={cls.navLink} href="">Магазин</a></li>
          <li><a className={cls.navLink} href="">О нас</a></li>
          <li><a className={cls.navLink} href="">Доставка</a></li>
        </ul>
      </nav>
      <Button theme={ButtonTheme.WHITE} size={ButtonSize.XS}>Контакты</Button>
    </div>
  )
}