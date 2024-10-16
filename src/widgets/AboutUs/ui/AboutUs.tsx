import Image from 'next/image';

import cls from './AboutUs.module.scss';
import { Suspense } from 'react';
import Script from 'next/script';

export const AboutUs = () => {
  return (
    <section id='about' className='full-width'>
      <h2 className={cls.title}>О нас</h2>
      <div className="sw-app" data-app="84c9745fe3a2ed6b970ef7c66da2c51f"></div>
      <h3 className={cls.subtitle}>Мы гарантируем</h3>
      <span className={cls.divider} />
      <Suspense>
        <Script strategy='afterInteractive' src='https://res.smartwidgets.ru/app.js' defer />
      </Suspense>
      <div className={cls.iconsList}>
        <div className={cls.iconItem}>
          <Image alt='Высокое качество' src='/icons/quality.svg' width={0} height={0} sizes='100vw' className={cls.icon} />
          <span className={cls.iconText}>Высокое качество</span>
        </div>
        <div className={cls.iconItem}>
          <Image alt='Честный литраж' src='/icons/true.svg' width={0} height={0} sizes='100vw' className={cls.icon} />
          <span className={cls.iconText}>Честный литраж</span>
        </div>
        <div className={cls.iconItem}>
          <Image alt='Своевременная и быстрая доставка' src='/icons/delivery.svg' width={0} height={0} sizes='100vw' className={cls.icon} />
          <span className={cls.iconText}>Своевременная и быстрая доставка</span>
        </div>
      </div>
    </section>
  )
}