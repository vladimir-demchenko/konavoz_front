import Image from 'next/image';

import cls from './Delivery.module.scss';
import { DeliveryRequestForm } from '@/features/DeliveryRequestForm';

export const Delivery = () => {
  return (
    <section className='full-width'>
      <h2 className={cls.title}>Доставка</h2>
      <div className={cls.deliveryDetail}>
        <Image alt='' src='/images/delivery.png' sizes='100wh' width={0} height={0} className={cls.image} />
        <div>
          <p className={cls.deliveryText}>Вы можете приобрести органические удобрения, гарантирующие плодородие почвы и высокий урожай,<span className={cls.highlighted}> с доставкой до Вашего участка либо самовывозом.</span></p>
          <br />
          <p className={cls.deliveryText}>Доставка навоза и плодородного грунта осуществляется <span className={cls.highlighted}>по Москве и Подмосковью</span>, в любой день в удобное для Вас время.</p>
        </div>
      </div>
      <div className={cls.formBlock}>
        <div className={cls.formContent}>
          <h3 className={cls.formTitle}>Хотите заказать доставку?</h3>
          <div className={cls.textWrapper}>
            <p className={cls.text}>Оставьте свои данные, и мы свяжемся с вами, чтобы оформить заказ и осуществить доставку</p>
            <span className={cls.textHighlighted}>или</span>
            <p className={cls.text}>наберите по телефону:<br />
              +7 (985) 419-02-95</p>
          </div>
          <DeliveryRequestForm className={cls.formWrapper} />
        </div>
      </div>
    </section>
  )
}