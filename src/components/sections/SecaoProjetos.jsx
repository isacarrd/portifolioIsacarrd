import { useTranslation } from "react-i18next";
import CardProj from "../ui/CardProj";

import projMercadinho from "../../assets/images/projects/mercadinhoAragao.png"
import projHearOfPoets from "../../assets/images/projects//heartOfpoets.png"

function SecaoProjetos() {
  const { t } = useTranslation();
  return (
    <div>
      <CardProj
        textoPadrao={t("cardProj.proj1")}
        textoHover={t("cardProj.hover")}
        bgImage={projHearOfPoets}
        bgAlt={"Projeto Mercadinho Aragão"}
      />
    </div>
  );
}

export default SecaoProjetos;
