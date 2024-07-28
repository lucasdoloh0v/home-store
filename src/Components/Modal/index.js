import * as Dialog from '@radix-ui/react-dialog';
import { Content, ModalHeader, Overlay } from './styles';
import { Cross1Icon } from '@radix-ui/react-icons';

function Modal({ open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

function ModalContent({title, children}) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalHeader>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Close>
            <Cross1Icon />
          </Dialog.Close>
        </ModalHeader>
        {children}
      </Content>
    </Dialog.Portal>
  );
}

Modal.Trigger = Dialog.Trigger
Modal.Content = ModalContent;

export default Modal;
