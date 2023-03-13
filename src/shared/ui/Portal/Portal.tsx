import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
  element?: HTMLElement;
};

export const Portal = ({ children, element = document.body }: Props) => {
  return createPortal(children, element);
};
