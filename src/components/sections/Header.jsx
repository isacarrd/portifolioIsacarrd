import { useState } from "react";
import { useTranslation } from "react-i18next";
import LangButton from "../form/LangButton";
import Texto from "../ui/Texto";
import Botao from "../ui/Botao"
import style from "./Header.module.css";

export default function Header() {
  const { t } = useTranslation();
  const [menuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };
  return (
    <header className={style.headerPort}>
      <nav>
        <button
          className={`${style.hamburger} ${
            menuAberto ? style.hamburgerAtivo : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={style.barra}></span>
          <span className={style.barra}></span>
          <span className={style.barra}></span>
        </button>
        <ul
          className={`${style.navLinks} ${menuAberto ? style.menuAberto : ""}`}
        >
          <li>
            <Texto as="a" color="var(--branco)" font="var(--nav)" href="#about">
              {t("header.about")}
            </Texto>
          </li>
          <li>
            <Texto
              as="a"
              color="var(--branco)"
              font="var(--nav)"
              href="#habilites"
            >
              {t("header.habilites")}
            </Texto>
          </li>
          <li>
            <Texto
              as="a"
              color="var(--branco)"
              font="var(--nav)"
              href="#projects"
            >
              {t("header.projects")}
            </Texto>
          </li>
          <li>
            <Botao href="#contact" tamanho="btnDesktopHeader">
              <Texto as="span" color="var(--branco)" font="var(--nav)">
                {t("btn.btnContato")}
              </Texto>
            </Botao>
          </li>
          <li className={style.espacoLing} role="button">
            <LangButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
