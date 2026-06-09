import styles from "./MiniCard.module.css";
import Texto from "./Texto"

function MiniCard({ icoLang, langAlt, langName }) {
  return (
    <div className={styles.miniC}>
      <img src={icoLang} alt={langAlt} className={styles.lang} />
      <Texto
        as="span"
        color="var(--branco)"
        font="var(--miniCard)"
        textAlign="center"
        disableHover={true}
      >
        {langName}
      </Texto>
    </div>
  )
}

export default MiniCard;