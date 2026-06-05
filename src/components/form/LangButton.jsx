import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Texto from "../ui/Texto";
import styles from "./LangButton.module.css";

function LangButton() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = async(e, fallbackLng) => {
    e.stopPropagation();
    try {
      await i18n.changeLanguage(fallbackLng);
      setIsOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao mudar de idioma:", error);
    }
  };

  const isPt = String(i18n.language || "pt")
    .toLowerCase()
    .includes("pt");

  return (
    <button
      className={`${styles.langContainer} ${isOpen ? styles.open : ""}`}
      onClick={toggleMenu}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Idioma Ativo (Sempre visível) */}
      <div className={styles.activeArea} onClick={toggleMenu}>
        {/* Idioma */}
        <div className={styles.flagCont}>
          <div
            className={`${styles.flag} ${isPt ? styles.br : styles.us}`}
          ></div>
        </div>

        {/* Seta */}
        <div
          className={`${styles.arrowContainer} ${
            isOpen ? styles.arrowContainerTop : styles.arrowContainerDown
          }`}
        ></div>
      </div>

      {/* Opções (Só aparecem quando aberto) */}
      {isOpen && (
        <div
          className={styles.dropdownArea}
          onClick={(e) => changeLanguage(e, isPt ? "en" : "pt")}
        >
          <div
            className={`${styles.flag} ${isPt ? styles.us : styles.br}`}
          ></div>
          <Texto as="span" font="var(--langButton)" color="var(--branco)">
            {isPt ? "EN-US" : "PT-BR"}
          </Texto>
        </div>
      )}
    </button>
  );
}

export default LangButton;
