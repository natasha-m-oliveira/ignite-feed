import { Slot } from "@radix-ui/react-slot";

import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  color?: "primary" | "danger";
  outlined?: boolean;
  text?: boolean;
  asChild?: boolean;
}

export function Button({
  children,
  className,
  color,
  outlined,
  text,
  asChild,
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={classNames(styles.button, className, {
        [styles[color ? color : ""]]: color,
        [styles.outlined]: outlined,
        [styles.text]: text,
      })}
      {...rest}
    >
      {children}
    </Comp>
  );
}
