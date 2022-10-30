import { Slot } from "@radix-ui/react-slot";

import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.css";

export interface ButtonRootProps {
  children: ReactNode;
  className?: string;
  type: "primary" | "cancel" | "danger" | "outlined";
}

function ButtonRoot(props: ButtonRootProps) {
  return (
    <div className={clsx(styles.wrapper, styles[props.type], props.className)}>
      {props.children}
    </div>
  );
}

ButtonRoot.displayName = "Button.Root";

export interface ButtonIconProps {
  children: ReactNode;
  className?: string;
}

function ButtonIcon(props: ButtonIconProps) {
  return <Slot className={clsx(props.className)}>{props.children}</Slot>;
}

export interface ButtonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

function ButtonButton({
  children,
  asChild = false,
  className,
  ...props
}: ButtonButtonProps): JSX.Element {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={clsx(styles.button, className)} {...props}>
      {children}
    </Comp>
  );
}

export const Button = {
  Root: ButtonRoot,
  Button: ButtonButton,
  Icon: ButtonIcon,
};
