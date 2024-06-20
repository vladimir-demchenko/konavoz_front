import Image from 'next/image';

import cls from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <section className='full-width'>
      <h2 className={cls.title}>О нас</h2>
      <h3 className={cls.subtitle}>Мы гарантируем</h3>
      <span className={cls.divider} />
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