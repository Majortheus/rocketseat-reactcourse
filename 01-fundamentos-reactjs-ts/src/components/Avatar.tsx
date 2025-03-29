import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

type AvatarProps = {
  hasBorder?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

export function Avatar({ hasBorder = true, src, ...rest }: AvatarProps) {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...rest}
    />
  );
}
