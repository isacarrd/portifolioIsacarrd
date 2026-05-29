import { useState } from "react";
import { useTranslation } from "react-i18next";
import Texto from "../ui/Texto";
import styles from "./EmailForm.module.css";

function EmailForm() {
  const { t } = useTranslation();

  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [conteudo, setConteudo] = useState("");

  return (
    <div className={styles.contato}>
      <Texto as="h2" font="var(--h2)" color="var(--branco)">
        {" "}
        Entre em contato{" "}
      </Texto>

      <form className={styles.formCont} onSubmit={() => {}}>
        <div className={styles.inputs}>
          {/* NOME */}
          <div className={styles.campo}>
            <Texto
              as="label"
              color="var(--branco-btn)"
              font="var(--inputTitle)"
              htmlFor="user-nome"
            >
              {t("form.nomeTitle")}
            </Texto>
            <input
              required
              type="text"
              name="user-nome"
              id="user-nome"
              placeholder={t("form.nomeDesc")}
              className={styles.campoInput}
              value={name}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          {/* EMAIL */}
          <div className={styles.campo}>
            <Texto
              as="label"
              color="var(--branco-btn)"
              font="var(--inputTitle)"
              htmlFor="user-email"
            >
              {t("form.emailTitle")}
            </Texto>
            <input
              required
              type="email"
              name="user-email"
              id="user-email"
              placeholder={t("form.emailDesc")}
              className={styles.campoInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* ASSUNTO */}
          <div className={styles.campo}>
            <Texto
              as="label"
              color="var(--branco-btn)"
              font="var(--inputTitle)"
              htmlFor="user-assunto"
            >
              {t("form.assuntoTitle")}
            </Texto>
            <input
              required
              type="text"
              name="user-assunto"
              id="user-assunto"
              placeholder={t("form.assuntoDesc")}
              className={styles.campoInput}
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
            />
          </div>
          {/* CONTEUDO */}
          <div className={styles.campo}>
            <Texto
              as="label"
              color="var(--branco-btn)"
              font="var(--inputTitle)"
              htmlFor="user-conteudo"
            >
              {t("form.conteudoTitle")}
            </Texto>
            <textarea
              required
              type="text"
              name="user-conteudo"
              id="user-conteudo"
              placeholder={t("form.conteudoDesc")}
              className={`${styles.campoInput} ${styles.campoCont}`}
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
