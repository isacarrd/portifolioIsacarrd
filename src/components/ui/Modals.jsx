import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import styles from "./Modals.module.css";
import Texto from "./Texto";

import confirmImg from "../../assets/images/icons/confirm.svg";

function ModalConfirmacao({ isOpen, onClose }) {
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
          <Texto as="span" font="var(--botao)" color="var(--branco)">
            {t("btn.btnFechar")}
          </Texto>
        </Button>
      </div>
    </div>
  );
}

function ModalProjeto({
  isOpen,
  onClose,
  tituloProj,
  bgImage,
  bgAlt,
  desc,
  urlRepo,
  urlProj,
  icoProj,
}) {
  const { t } = useTranslation();

  return (
    <div className={styles.pjPosition}>
      <div className={styles.focusModal}>
        <header>
          <img src="/src/assets/images/logos/catLogo-128.svg" alt="Logo" />
          <button type="button">
            <img src="/src/assets/images/icons/close.png" alt="Close" />
          </button>
        </header>
        <div className={styles.projeto}>
          <img src={bgImage} alt={bgAlt} className={styles.fotoProj} />
          <div className={styles.infoBotoes}>
            <div className={styles.nomeDescricao}>
              <Texto as="h3" color="var(--branco)" font="var(--h3Modal)">
                {tituloProj}
              </Texto>
              <div className={styles.descricao}>
                <Texto
                  as="p"
                  color="var(--branco)"
                  font="var(--phModal)"
                  opacity="var(--padrao-opacity)"
                  textAlign="justify"
                >
                  {desc}
                </Texto>
                <div className={styles.linguagens}>
                  {icoProj &&
                    icoProj.map((icone, index) => (
                      <img
                        key={index}
                        src={icone}
                        alt={`Tecno ${index}`}
                        title={icone.nome}
                        className={styles.langIcon}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className={styles.botoes}>
              <Button href={urlProj} target={"_blank"}>
                <Texto as="a" color="var(--branco)" font="var(--botaoModal)">
                  {t("btn.btnProjeto")}
                </Texto>
              </Button>
              <Button estilo="btnVazado" href={urlRepo} target={"_blank"}>
                <Texto as="a" color="var(--branco)" font="var(--botaoModal)">
                  {t("btn.btnRepositorio")}
                </Texto>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ModalConfirmacao, ModalProjeto };
