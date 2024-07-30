"use client"

import { Toast as ArkToast, Toaster as ArkToaster, createToaster } from '@ark-ui/react'
import { Check, XIcon } from 'lucide-react'
import './Tost.scss';
import { Button, ButtonSize, ButtonTheme } from '../Button';


export const useToast = () => {
  const toaster = createToaster({
    placement: 'top',
    overlap: true,
    gap: 12
  });

  const Toaster = (
    <ArkToaster toaster={toaster}>
      {(toast) => (
        <ArkToast.Root key={toast.id}>
          <ArkToast.Title>
            {toast.type === "success" ? <span data-scope="toast" data-part='icon' data-type='success'><Check strokeWidth={3} color='#fff' size={12} /></span> : <span data-scope="toast" data-part='icon' data-type='error'><XIcon strokeWidth={3} color='#fff' size={12} /></span>}
            {toast.title}
          </ArkToast.Title>
          <ArkToast.Description>{toast.description}</ArkToast.Description>
          <ArkToast.CloseTrigger asChild>
            <Button theme={ButtonTheme.CLEAR} size={ButtonSize.DEFAULT}><XIcon size={16} /></Button>
          </ArkToast.CloseTrigger>
        </ArkToast.Root>
      )}
    </ArkToaster>
  );

  return { toaster, Toaster }
}