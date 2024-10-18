import { FC } from 'react';
import cls from './Promo.module.scss';
import { Header } from '@/widgets/Header';
import classNames from 'classnames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface PromoProps {
  className?: string;
}

export const Promo: FC<PromoProps> = (props) => {
  return (
    <section className={classNames([cls.promo, 'full-width'])}>
      <Header />
      <div className={cls.promoContent}>
        <h1 className={cls.title}>
          Навоз, перегной, грунты с доставкой <br />
          по Москве и Московской области
        </h1>
        <div className={cls.phones}>
          <a href="tel:+79854190295" className={cls.phones_text}>+7 (985) 419-02-95</a>
          <a href="tel:+79854225818" className={cls.phones_text}>+7 (985) 422-58-18</a>
        </div>
        <p className={cls.promoText}>Наша компания предлагает Вашему вниманию лучшие органические удобрения для вашего участка <br />
          с доставкой</p>
        <a href='#shop' className={cls.promoButton}>Заказать</a>
      </div>
    </section>
  );
};