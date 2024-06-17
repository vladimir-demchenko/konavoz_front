import { Checkbox as ArkCheckbox, type CheckboxRootProps } from '@ark-ui/react'
import { CheckIcon } from 'lucide-react'

import './Checkbox.scss';

interface CheckboxProps extends CheckboxRootProps {

}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <ArkCheckbox.Root>
      <ArkCheckbox.Control>
        <ArkCheckbox.Indicator>
          <CheckIcon width={20} height={20} />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      <ArkCheckbox.Label>Test</ArkCheckbox.Label>
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  )
}