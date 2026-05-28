import { useState } from "react";
import Texto from "../ui/Texto";
import styles from "./CardProj.module.css";

function CardProj({ children, textoPadrao, textoHover, bgImage, bgAlt}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a href="#" className={styles.link}>
      <div
        className={styles.cardBase}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {bgImage && (
          <img src={bgImage} alt={bgAlt} className={styles.imgBanner} />
        )}

        <div className={styles.contCard}>
          {children}
          <Texto
            as="span"
            font="var(--cardProj)"
            color="var(--branco)"
            webkitTextStroke="0.5px var(--laranja)"
            letterSpacing="var(--padrao-opacity)"
          >
            {isHovered ? textoHover : textoPadrao}
          </Texto>
        </div>
      </div>
    </a>
  );
}

export default CardProj;
