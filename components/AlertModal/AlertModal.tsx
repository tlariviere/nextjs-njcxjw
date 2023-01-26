import Link from "next/link";
import { forwardRef, ReactNode } from "react";

import Modal, { ModalMethods } from "components/Modal";
import Button from "components/Button";

import styles from "./AlertModal.module.scss";

interface Props {
  readonly title: string;
  readonly summary: ReactNode;
  readonly message: string;
  readonly buttonHref: string;
  readonly buttonLabel: string;
}

const AlertModal = forwardRef<ModalMethods, Props>(
  ({ title, summary, message, buttonHref, buttonLabel }, ref) => (
    <Modal ref={ref} className={styles.AlertModal}>
      <h3>{title}</h3>

      <div>{summary}</div>

      <p className={styles.message}>{message}</p>

      <Link href={buttonHref}>
        <Button className={styles.button} label={buttonLabel} />
      </Link>
    </Modal>
  )
);

export default AlertModal;
