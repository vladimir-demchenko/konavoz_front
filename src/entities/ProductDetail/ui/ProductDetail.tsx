"use client"
import classNames from 'classnames';
import cls from './ProductDetail.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/Button';

interface ProductDetailProp {
  position: 'left' | 'right';
  title: string;
  desc: string;
  image: string;
  className?: string;
}

export const ProductDetail = ({ position, title, desc, image, className }: ProductDetailProp) => {
  const classes = classNames(
    cls.productDetail,
    className,
    {
      [`${cls.image_end}`]: position === 'right'
    }
  )

  return (
    <div className={classes}>
      <Image width={570} height={480} alt={title} src={image} />
      <div className={cls.detailContent}>
        <div className={cls.titleWrapper}>
          <h4 className={cls.title}>{title}</h4>
        </div>
        <p className={cls.description}>{desc}</p>
        <Button className={cls.detailButton}>Заказать</Button>
      </div>
    </div>
  )
}