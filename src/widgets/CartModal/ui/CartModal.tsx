"use client"

import { Dialog, Portal } from '@ark-ui/react';
import './CartModal.scss';
import { CartItem } from '@/entities/CartItem';
import { useProductStore } from '@/providers/store-provider';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { XIcon } from 'lucide-react';
import { CartForm } from '@/features/CartForm';

export const CartModal = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (...args: any[]) => void }) => {
  const { items, addToCart, removeFromCart } = useProductStore((state) => state);

  const amount = Object.values(items).reduce((acc, cur) => acc + (cur.quantity * cur.product.price), 0)
  console.log(items);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Title>Ваш заказ:</Dialog.Title>
            <Dialog.Description>
              <div className='content'>
                <span data-scope='dialog' data-part='divider' />
                <div className='list'>
                  {Object.values(items).map((item) => (
                    <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />
                  ))}
                </div>
                <span data-scope='dialog' data-part='divider' />
                <span className='amount'>Сумма: <br /> {amount} ₽</span>
                <CartForm />
              </div>
            </Dialog.Description>
            <Dialog.CloseTrigger asChild>
              <Button theme={ButtonTheme.CLEAR} size={ButtonSize.DEFAULT}><XIcon size={20} /></Button>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}