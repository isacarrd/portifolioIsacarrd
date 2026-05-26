import { useTranslation } from "react-i18next";
import CardProj from "../ui/CardProj";

function SecaoProjetos() {
  const { t } = useTranslation();
  return (
    <div>
      <CardProj
        textoPadrao={t("cardProj.proj1")}
        textoHover={t("cardProj.hover")}
      ></CardProj>
    </div>
  );
}

export default SecaoProjetos;
