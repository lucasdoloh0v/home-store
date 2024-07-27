import { Portal } from '@radix-ui/react-select';
import { Viewport } from '@radix-ui/react-select';
import { Content } from '@radix-ui/react-select';
import { Trigger } from '@radix-ui/react-select';
import styled from 'styled-components';

export const ContainerFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  margin-top: 8px;
`;

export const SelectTrigger = styled(Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 0;
  padding: 0 8px;
  line-height: 1;
  height: 24px;
  background-color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);

  &:hover {
    opacity: 0.8;
  }
`;

export const SelectContent = styled(Content)`
  overflow: hidden;
  background-color: white;
  right: 0;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  padding: 8px;
`

export const SelectViewport = styled(Viewport)`
  padding: 5px;
`
