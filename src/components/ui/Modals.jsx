import React from 'react'
import Texto from './Texto';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import styles from './Modals.module.css'

import confirmImg from "../../assets/images/icons/confirm.svg"

export function ModalConfirmacao({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { t } = useTranslation();
  
    return (
      <div className={styles.cfPosition}>
        <div className={styles.modalConfirm}>
          <div className={styles.mdCF}>
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
          <Button onClick={onClose}>
            <Texto
              as='span'
              font="var(--botao)"
              color="var(--branco)"
            >{t("btn.btnFechar")}</Texto>
          </Button>
        </div>
      </div>
    );
  }

// export function ModalProjeto() {
//   return (
//     <div>Modals</div>
//   )
// }
