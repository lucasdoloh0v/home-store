import { DialogContent } from "@radix-ui/react-dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0px;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled(DialogContent)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 80%;
  background-color: white;
  padding: 8px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;

  h2 {
    font-size: 18px;
  }

  button {
    border: 0;
    background-color: transparent;
    color: gray;
    
    &:hover {
      opacity: 0.8;
    }
  }
`;

