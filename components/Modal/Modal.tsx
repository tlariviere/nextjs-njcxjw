import clsx from "clsx";
import { useState, ReactNode, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

interface Props {
  readonly children: ReactNode;
  readonly className?: string;
}

export interface ModalMethods {
  readonly open: () => void;
  readonly close: () => void;
}

const Modal = forwardRef<ModalMethods, Props>(
  ({ children, className }, ref) => {
    const [visible, setVisible] = useState(false);

    const close = () => setVisible(false);

    useImperativeHandle(ref, () => ({
      open: () => setVisible(true),
      close,
    }));

    if (!visible) {
      return null;
    }

    return createPortal(
      <div className={styles.Modal} onClick={close}>
        <div className={clsx(styles.container, className)} role="dialog">
          {children}
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }
);

export default Modal;
