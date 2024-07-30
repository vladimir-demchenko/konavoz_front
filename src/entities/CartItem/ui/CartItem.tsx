import Image from 'next/image';
import cls from './CartItem.module.scss';
import { useProductStore } from '@/providers/store-provider';
import { Product } from '@/widgets/Shop/model/products';
import { CircleMinus, CirclePlus } from 'lucide-react';

interface CartItemProps {
  product: Product;
  quantity: number;
}

export const CartItem = ({ product, quantity }: CartItemProps) => {
  const { addToCart, removeFromCart } = useProductStore((state) => state)

  return (
    <div className={cls.item}>
      <Image src={product?.image} alt={product?.name} sizes='100vw' height={0} width={0} className={cls.image} />
      <div className={cls.itemContent}>
        <h3 className={cls.name}>{product?.name}</h3>
        <div role="spinbutton"
          className={cls.spinButton}
          aria-valuemin={1}
          aria-valuemax={10}
          aria-valuenow={quantity}
          aria-valuetext={`${quantity}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp') {
              addToCart(product);
            } else if (e.key === 'ArrowDown') {
              removeFromCart(product);
            }
          }}>
          <button className={cls.controlButtons} onClick={() => removeFromCart(product)} aria-label="Decrement"><CircleMinus strokeWidth={1} color="#2b1f13" /></button>
          <input type="number"
            className={cls.spinInput}
            disabled
            value={quantity}
            min={1}
            max={10}
            step={1}
            aria-label="Spinbutton value" />
          <button className={cls.controlButtons} onClick={() => addToCart(product)} aria-label="Increment"><CirclePlus strokeWidth={1} color="#2b1f13" /></button>
        </div>
        <span className={cls.price}>{product?.price} ₽</span>
      </div>
      {/* delete button*/}
    </div>
  )
}