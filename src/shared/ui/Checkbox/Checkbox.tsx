"use client"
import { Checkbox as ArkCheckbox, type CheckboxRootProps } from '@ark-ui/react'
import { CheckIcon } from 'lucide-react'

import './Checkbox.scss';
import { ReactNode } from 'react';

interface CheckboxProps extends CheckboxRootProps {
  children: ReactNode;
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <ArkCheckbox.Root>
      <ArkCheckbox.Control>
        <ArkCheckbox.Indicator>
          <CheckIcon color="#FFFFFF" width={20} height={20} />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      <ArkCheckbox.Label>{props.children}</ArkCheckbox.Label>
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  )
}