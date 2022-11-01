import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, className, ...rest }: AvatarProps) {
  return (
    <img
      className={`${styles.avatar} ${
        hasBorder ? styles.avatarWithBorder : ""
      } ${className}`}
      {...rest}
    />
  );
}
