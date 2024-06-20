import Image from 'next/image';
import cls from './Product.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

interface ProductProps {
  name: string;
  image: string;
  price: number;
  detail?: string;
  newProduct?: boolean
}

export const Product = ({ name, image, price, detail, newProduct }: ProductProps) => {
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
      <Button size={ButtonSize.M} theme={ButtonTheme.LIGHT_BROWN} className={cls.productButton}>В корзину</Button>
    </div>
  )
}