import clsx from "clsx";
import { forwardRef } from "react";

import styles from "./Button.module.scss";

interface Props {
  readonly label: string;
  readonly onClick?: () => void;
  readonly className?: string;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ label, onClick, className }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className={clsx(styles.Button, className)}
    >
      {label}
    </button>
  )
);

export default Button;
