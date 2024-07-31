import classNames from 'classnames'
import Image from 'next/image';
import cls from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={classNames('full-width', cls.footer)}>
      <div className={cls.footerContent}>
        <div className={cls.mainContent}>
          <div className={cls.titleWrapper}>
            <h2 className={cls.title}>Навоз с доставкой
              по Москве и Московской области</h2>
            <a><Image alt='telegram logo' src='/icons/telegramLogo.svg' width={0} height={0} sizes='100wh' className={cls.telegramLogo} /></a>
          </div>
          <div className={cls.navWrapper}>
            <h3 className={cls.subtitle}>Навигация</h3>
            <nav>
              <ul className={cls.navList}>
                <li className={cls.navItem}><a className={cls.navLink} href="#organic">Органические удобрения</a></li>
                <li className={cls.navItem}><a className={cls.navLink} href="#ground">Грунты</a></li>
                <li className={cls.navItem}><a className={cls.navLink} href="#shop">Магазин</a></li>
                <li className={cls.navItem}><a className={cls.navLink} href="#about">О нас</a></li>
                <li className={cls.navItem}><a className={cls.navLink} href="#delivery">Доставка</a></li>
              </ul>
            </nav>
          </div>
          <div className={cls.contactWrapper}>
            <div className={cls.contactCard}>
              <h3 className={cls.subtitle}><Image alt='phones' src='/icons/phone.svg' width={0} height={0} sizes='100wh' className={cls.icon} /> Телефон</h3>
              <span className={cls.phones}>+7 (985) 419-02-95 <br />
                +7 (985) 422-58-18</span>
            </div>
            <div className={cls.contactCard}>
              <h3 className={cls.subtitle}><Image alt='address' src='/icons/address.svg' width={0} height={0} sizes='100wh' className={cls.icon} /> Адрес</h3>
              <a className={cls.link} href='https://yandex.ru/maps/?from=mapframe&ll=38.037650%2C55.566560&mode=usermaps&source=mapframe&um=constructor%3Absm6zn9Yr20JkiGrnySmJ9pA2XgsFboS&utm_source=mapframe&z=10' target='_blank'>Московская область, г. Жуковский, ул. Дорожная</a>
            </div>
          </div>
        </div>
        <span className={cls.divider} />
        <div className={cls.subContent}>
          <div className={cls.logoWrapper}>
            <Image alt='logo' src='/icons/logo.svg' width={0} height={0} sizes='100wh' className={cls.logo} />
            <span className={cls.logoText}>© 2024, Конавоз</span>
          </div>
          <a href='/privacy' target='_blank' className={cls.sublink}>Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  )
}