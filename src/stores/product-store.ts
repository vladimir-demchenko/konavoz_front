import { Product } from '@/widgets/Shop/model/products';
import { createStore } from 'zustand/vanilla';

export type CartItem = {
  product: Product
  quantity: number
}

export type ProductState = {
  items: Record<Product['id'], CartItem>
}

export type ProductActions = {
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
}

export type ProductStore = ProductState & ProductActions

export const initProductStore = (): ProductState => {
  return { items: {} }
}

export const defaultInitState: ProductState = {
  items: {}
}

export const createProductStore = (
  initState: ProductState = defaultInitState,
) => {
  return createStore<ProductStore>()((set, get) => ({
    ...initState,
    addToCart: (product) => {
      const productInCart = get().items[product.id]

      if (productInCart) {
        set({ items: { ...get().items, [product.id]: { product: get().items[product.id].product, quantity: get().items[product.id].quantity + 1 } } })
      } else {
        set({ items: { ...get().items, [product.id]: { product: product, quantity: 1 } } })
      }
    },
    removeFromCart: (product) => {
      const productInCart = get().items[product.id]

      if (!productInCart) {
        return
      }
      if (get().items[product.id].quantity > 1) {
        set({ items: { ...get().items, [product.id]: { product: get().items[product.id].product, quantity: get().items[product.id].quantity - 1 } } })
      } else {
        const { [product.id]: value, ...other } = get().items
        set({ items: { ...other } })
      }
    }
  }))
}