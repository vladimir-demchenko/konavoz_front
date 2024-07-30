"use client"
import { Checkbox as ArkCheckbox, type CheckboxRootProps } from '@ark-ui/react'
import { CheckIcon } from 'lucide-react'

import './Checkbox.scss';
import { ReactNode, forwardRef } from 'react';

interface CheckboxProps extends CheckboxRootProps {
  children: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    children,
    ...otherProps
  } = props;

  return (
    <ArkCheckbox.Root {...otherProps}>
      <ArkCheckbox.Control>
        <ArkCheckbox.Indicator>
          <CheckIcon color="#FFFFFF" width={20} height={20} />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      <ArkCheckbox.Label>{children}</ArkCheckbox.Label>
      <ArkCheckbox.HiddenInput ref={ref} />
    </ArkCheckbox.Root>
  )
})