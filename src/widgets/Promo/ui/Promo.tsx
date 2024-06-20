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
      <div className={cls.promoContent}>
        <Header />
        <h1 className={cls.title}>
          Навоз с доставкой <br />
          по Москве и Московской области
        </h1>
        <p className={cls.promoText}>Наша компания предлагает Вашему вниманию лучшие органические удобрения для вашего участка <br />
          с доставкой</p>
        <Button theme={ButtonTheme.WHITE} className={cls.promoButton}>Заказать</Button>
      </div>
    </section>
  );
};