import { Root } from '@radix-ui/react-toast';
import { Viewport } from '@radix-ui/react-toast';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

export const InputContainer = styled.div`
  margin-top: 8px;

  input {
    width: calc(100% - 12px);
    max-width: 100%;
    height: 28px;

    border: 1px solid gray;
    border-radius: 10px;
    padding: 6px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      opacity: 0.8;
    }
  }
  p {
    color: red;
    font-size: 8px;
    font-weight: 700;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 24px;

  width: 100%;
  height: 28px;
  cursor: pointer;
  border-radius: 10px;
`;

export const ToastViewport = styled(Viewport)`
  position: fixed;
  bottom: 55vh;
  right: -50vw;
  transform: translate(-100%, 0);
  display: flex;
  flex-direction: column;
  width: 390px;
  max-width: 60%;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`;

export const ToastRoot = styled(Root)`
  background-color: lightgreen;
  color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 12px;

  &[data-state='open'] {
    animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  &[data-state='closed'] {
    animation: hide 100ms ease-in;
  }
  &[data-swipe='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  &[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }
  &[data-swipe='end'] {
    animation: swipeOut 100ms ease-out;
  }

  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes swipeOut {
    from {
      transform: translateX(var(--radix-toast-swipe-end-x));
    }
    to {
      transform: translateX(100%);
    }
  }
`;
