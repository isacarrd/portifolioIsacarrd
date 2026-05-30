import React from 'react'
import Texto from './Texto';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import styles from './Modals.module.css'

import confirmImg from "../../assets/images/icons/confirm.svg"

export default function ModalConfirmacao({ isOpen }) {
  const { t } = useTranslation();
  
  if (isOpen) {
    return (
      <div className={styles.modalConfirm}>
        <div className={styles.mdDv}>
          <Texto
            as="span"
            color="var(--branco)"
            font="var(--modalConfirm)"
            textAlign="center"
          >
            {t("modals.confirmation")}
          </Texto>
          <img src={confirmImg} alt="Confirmação" />
        </div>
        <Button>
          <Texto
            as='span'
            font="var(--botao)"
            color="var(--branco)"
          >{t("btn.btnFechar")}</Texto>
        </Button>
      </div>
    );
  }
  return null
}

// export default function ModalProjeto() {
//   return (
//     <div>Modals</div>
//   )
// }
