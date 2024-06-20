import { Product } from '@/entities/Product/ui/Product';
import cls from './Shop.module.scss';
import { products } from '../model/products';

export const Shop = () => {
  return (
    <section className='full-width'>
      <h2 className={cls.title}>Магазин</h2>
      <div className={cls.productList}>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            newProduct={product?.new}
            detail={product?.detail}
          />
        ))}
      </div>
      {/*TODO add a collapse button */}
    </section>
  )
}