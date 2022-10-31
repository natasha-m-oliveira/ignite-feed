import classNames from "classnames";
import React, { DialogHTMLAttributes, forwardRef, ReactNode } from "react";
import styles from "./Modal.module.css";

export interface ModalRootProps
  extends DialogHTMLAttributes<HTMLDialogElement> {
  children: ReactNode;
  className?: string;
}

const ModalRoot: React.ForwardRefRenderFunction<
  HTMLDialogElement,
  ModalBodyProps
> = ({ children, className, ...rest }, ref) => {
  return (
    <dialog className={classNames(styles.modal, className)} {...rest} ref={ref}>
      <div className={styles.content}>{children}</div>
    </dialog>
  );
};

ModalRoot.displayName = "Modal.Root";

export interface ModalHeaderProps {
  children: ReactNode;
  className?: string;
}

function ModalHeader({ children, className }: ModalHeaderProps) {
  return (
    <header className={classNames(styles.header, className)}>{children}</header>
  );
}

ModalHeader.displayName = "Modal.Header";

export interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

function ModalBody({ children, className }: ModalBodyProps) {
  return <div className={classNames(styles.body, className)}>{children}</div>;
}

ModalBody.displayName = "Modal.Body";

export interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <footer className={classNames(styles.footer, className)}>{children}</footer>
  );
}

ModalFooter.displayName = "Modal.Footer";

export const Modal = {
  Root: forwardRef(ModalRoot),
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
};
