import React from 'react';
import * as Select from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import { ContainerFilter, SelectContent, SelectTrigger } from './styles';

const OrderFilter = ({setOrder}) => (
  <ContainerFilter>
    <Select.Root onValueChange={(value) => setOrder(value)}>
      <SelectTrigger aria-label='Ordenação'>
        <Select.Value placeholder='Filtrar por ordem...' />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </SelectTrigger>
      <Select.Portal>
        <SelectContent>
          <Select.ScrollUpButton>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <Select.Group>
              <SelectItem value='growing'>Crescente</SelectItem>
              <SelectItem value='descending'>Decrescente</SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  </ContainerFilter>
);

const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <Select.Item {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

SelectItem.displayName = 'SelectIcon';

export default OrderFilter;
