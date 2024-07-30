"use client"

import Image from 'next/image'
import cls from './Header.module.scss'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import { useLayoutEffect, useState } from 'react'
import classNames from 'classnames'

export const Header = () => {
  const [collapse, setCollapse] = useState(true);
  const [colorChange, setColorChange] = useState(false);

  useLayoutEffect(() => {
    const changeHeaderColor = () => {
      if (window.scrollY !== 0) {
        setColorChange(true)
      } else {
        setColorChange(false)
      }
    }

    changeHeaderColor();

    window.addEventListener('scroll', changeHeaderColor);

    return () => window.removeEventListener('scroll', changeHeaderColor);
  }, [])

  return (
    <div className={classNames(cls.header, { [cls.scrolled]: colorChange })}>
      <div className={cls.headerContent}>
        <Image priority height={60} width={135} alt='logo' src='/icons/logo.svg' className={classNames(cls.logo, { [cls.logoActive]: !collapse })} />
        <nav className={classNames(cls.nav, { [cls.navActive]: !collapse })}>
          <Image src='/icons/logo_without_text.svg' alt='logo' height={0} width={0} sizes='100vw' className={cls.logoWithoutText} />
          <ul className={cls.navWrapper}>
            <li className={cls.navItem}><a className={cls.navLink} href="#organic">Органические удобрения</a></li>
            <li className={cls.navItem}><a className={cls.navLink} href="#ground">Грунты</a></li>
            <li className={cls.navItem}><a className={cls.navLink} href="#shop">Магазин</a></li>
            <li className={cls.navItem}><a className={cls.navLink} href="#about">О нас</a></li>
            <li className={cls.navItem}><a className={cls.navLink} href="#delivery">Доставка</a></li>
            <li className={cls.navItem}><a className={cls.navLink} href="#contacts">Контакты</a></li>
          </ul>
        </nav>
        <a href='#contacts' className={cls.contactButton}>Контакты</a>
        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.hamburgerButton, { [cls.active]: !collapse })} onClick={() => setCollapse((prev) => !prev)}>
          <span className={cls.hamburger} />
        </Button>
      </div>
    </div>
  )
}