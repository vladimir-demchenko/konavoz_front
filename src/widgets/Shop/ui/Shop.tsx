"use client"

import { Product } from '@/entities/Product/ui/Product';
import cls from './Shop.module.scss';
import { products } from '../model/products';
import { useState } from 'react';
import { CartModal } from '@/widgets/CartModal/ui/CartModal';

export const Shop = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id='shop' className='full-width'>
      <h2 className={cls.title}>Магазин</h2>
      <div className={cls.productList}>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            newProduct={product?.new}
            detail={product?.detail}
            setOpen={setOpen}
          />
        ))}
      </div>
      <CartModal isOpen={open} setIsOpen={setOpen} />
      {/*TODO add a collapse button */}
    </section>
  )
}