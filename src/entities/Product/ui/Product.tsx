"use client"

import Image from 'next/image';
import cls from './Product.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useProductStore } from '@/providers/store-provider';
import { useToast } from '@/shared/ui/Toast';

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  detail?: string;
  newProduct?: boolean
  setOpen: (...args: any[]) => void;
}

export const Product = ({ id, name, image, price, detail, newProduct, setOpen }: ProductProps) => {
  const items = useProductStore((state) => state.items[id])
  const addToCart = useProductStore((state) => state.addToCart);
  const { toaster, Toaster } = useToast();


  const handleClick = () => {
    if (!items) {
      toaster.create({
        title: 'Товар добавлен в корзину!',
        description: `"${name}" успешно добавлен в корзину`,
        type: 'success'
      })
      addToCart({ id, name, image, price, detail, new: newProduct })
      setOpen((prev: boolean) => !prev)
    } else {
      setOpen((prev: boolean) => !prev)
    }
  }

  return (
    <div className={cls.productCard}>
      <div className={cls.imageWrapper}>
        <Image width={0} height={0} sizes='100wh' className={cls.image} src={image} alt={name} />
        {newProduct ?
          (<span className={cls.newProduct}>
            Новинка
          </span>)
          : null
        }
      </div>
      <div>
        <h3 className={cls.productTitle}>{name}</h3>
        {detail && <p className={cls.productDetail}>{detail}</p>}
      </div>
      <span className={cls.productPrice}>{price} ₽</span>
      <Button size={ButtonSize.M} theme={ButtonTheme.LIGHT_BROWN} className={cls.productButton} onClick={handleClick}>{items ? "Открыть корзину" : "В корзину"}</Button>
      {Toaster}
    </div>
  )
}