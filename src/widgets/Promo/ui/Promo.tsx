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
          Навоз с доставкой <br />
          по Москве и Московской области
        </h1>
        <div className={cls.phones}>
          <span className={cls.phones_text}>+7 (985) 419-02-95</span>
          <span className={cls.phones_text}>+7 (985) 422-58-18</span>
        </div>
        <p className={cls.promoText}>Наша компания предлагает Вашему вниманию лучшие органические удобрения для вашего участка <br />
          с доставкой</p>
        <a href='#shop' className={cls.promoButton}>Заказать</a>
      </div>
    </section>
  );
};