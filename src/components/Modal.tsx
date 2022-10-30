import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./Modal.module.css";

export interface ModalRootProps {
  children: ReactNode;
  className?: string;
}

function ModalRoot({ children, className }: ModalRootProps) {
  return (
    <dialog className={clsx(styles.modal)}>
      <div className={clsx(styles.content, className)}>{children}</div>
    </dialog>
  );
}

ModalRoot.displayName = "Modal.Root";

export interface ModalHeaderProps {
  children: ReactNode;
  className?: string;
}

function ModalHeader({ children, className }: ModalHeaderProps) {
  return <header className={clsx(styles.header, className)}>{children}</header>;
}

ModalHeader.displayName = "Modal.Header";

export interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

function ModalBody({ children, className }: ModalBodyProps) {
  return <div className={clsx(styles.body, className)}>{children}</div>;
}

ModalBody.displayName = "Modal.Body";

export interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

function ModalFooter({ children, className }: ModalFooterProps) {
  return <footer className={clsx(styles.footer, className)}>{children}</footer>;
}

ModalFooter.displayName = "Modal.Footer";

export const Modal = {
  Root: ModalRoot,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
};
