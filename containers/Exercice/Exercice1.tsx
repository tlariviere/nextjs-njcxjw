import { useRef } from "react";

import { ModalMethods } from "components/Modal";
import AlertModal from "components/AlertModal";

import Button from "components/Button";

const Exercice1 = () => {
  const modal = useRef<ModalMethods>(null);
  const nbPieces = 1;
  const totalPieces = 3;
  const expireAt = "03/01/2022";

  return (
    <>
      <AlertModal
        ref={modal}
        title="Votre proposition de pièce est transmise au client"
        summary={
          <>
            <p>
              Pièces proposées: {nbPieces}/{totalPieces}
            </p>
            <p>Expiration: {expireAt}</p>
          </>
        }
        message="Vous serez averti par email si le client commande vos pièces"
        buttonHref="/find-your-part"
        buttonLabel="Voir les autres recherches"
      />

      <Button
        onClick={() => modal.current?.open()}
        label="Envoyer ma proposition"
      />
    </>
  );
};

export default Exercice1;
