import { useTranslation } from "react-i18next";
import CardProj from "../ui/CardProj";
import Texto from "../ui/Texto";
import styles from "./SecaoProjetos.module.css"

import projMercadinho from "../../assets/images/projects/mercadinhoAragao.png"
import projHearOfPoets from "../../assets/images/projects//heartOfpoets.png"

function SecaoProjetos() {
  const { t } = useTranslation();
  return (
    <div className={styles.baseProjetos}>
      <Texto as="h2" color="var(--branco)" font="var(--h2)">
        {" "}
        {t("infos.title2")}
      </Texto>
      <div className={styles.projs}>
        <CardProj
          textoPadrao={t("cardProj.proj1")}
          textoHover={t("cardProj.hover")}
          bgImage={projHearOfPoets}
          bgAlt={"Projeto Heart Of Poets"}
        />
        <CardProj
          textoPadrao={t("cardProj.proj1")}
          textoHover={t("cardProj.hover")}
          bgImage={projHearOfPoets}
          bgAlt={"Projeto Heart Of Poets"}
        />
        <CardProj
          textoPadrao={t("cardProj.proj1")}
          textoHover={t("cardProj.hover")}
          bgImage={projHearOfPoets}
          bgAlt={"Projeto Heart Of Poets"}
        />
        <CardProj
          textoPadrao={t("cardProj.proj1")}
          textoHover={t("cardProj.hover")}
          bgImage={projHearOfPoets}
          bgAlt={"Projeto Heart Of Poets"}
        />
        <CardProj
          textoPadrao={t("cardProj.proj1")}
          textoHover={t("cardProj.hover")}
          bgImage={projHearOfPoets}
          bgAlt={"Projeto Heart Of Poets"}
        />
      </div>
    </div>
  );
}

export default SecaoProjetos;
