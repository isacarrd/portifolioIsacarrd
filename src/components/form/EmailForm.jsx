import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import Texto from "../ui/Texto";
import styles from "./EmailForm.module.css";
import {ModalConfirmacao} from "../ui/Modals";

function EmailForm() {
  const servID = import.meta.env.VITE_service_ID;
  const tempID = import.meta.env.VITE_template_ID;
  const pubKEY = import.meta.env.VITE_pub_KEY;

  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const handleFechar= () => {
    setShowModal(false)
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const [emptyFields, setEmptyFields] = useState({
    name: false,
    email: false,
    title: false,
    message: false,
  });

  function sendEmail(e) {
    e.preventDefault();

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValidated = regex.test(email);

    const errosAtuais = {
      name: !name.trim(),
      email: !email.trim() || !emailValidated,
      title: !title.trim(),
      message: !message.trim(),
    };
    setEmptyFields(errosAtuais);

    if (Object.values(errosAtuais).includes(true)) {
      if (email.trim() && !emailValidated) {
        alert("Por favor, insira um e-mail válido!")
      }
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      from_title: title,
      from_message: message,
    };

    emailjs.send(servID, tempID, templateParams, pubKEY).then(
      (response) => {
        console.log("enviado", response.status, response.text);
        if (response.status === 200) {
          setShowModal(true)
        } else {
          alert(`Falha com status: ${response.status}`);
        }
        setName("");
        setEmail("");
        setTitle("");
        setMessage("");
      },
      (err) => {
        console.log("ERRO: ", err);
      }
    );
  }
  return (
    <div className={styles.contato}>
      <Texto as="h2" font="var(--h2)" color="var(--branco)">
        {t("infos.title3")}
      </Texto>

      <form className={styles.formCont} onSubmit={sendEmail} noValidate>
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
              className={`${styles.campoInput} ${
                emptyFields.name ? styles.campoVazio : ""
              }`}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (emptyFields.name)
                  setEmptyFields({ ...emptyFields, name: false });
              }}
            />
            {emptyFields.name && (
              <Texto
                as="span"
                color="var(--error-color)"
                font="var(--sub)"
                className={styles.msgErro}
              >
                {t("form.inputError.nomeErr")}
              </Texto>
            )}
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
              className={`${styles.campoInput} ${
                emptyFields.name ? styles.campoVazio : ""
              }`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emptyFields.email)
                  setEmptyFields({ ...emptyFields, email: false });
              }}
            />
            {emptyFields.email && (
              <Texto
                as="span"
                color="var(--error-color)"
                font="var(--sub)"
                className={styles.msgErro}
              >
                {t("form.inputError.emailErr")}
              </Texto>
            )}
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
              className={`${styles.campoInput} ${
                emptyFields.name ? styles.campoVazio : ""
              }`}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (emptyFields.title) {
                  setEmptyFields({ ...emptyFields, title: false });
                }
              }}
            />
            {emptyFields.title && (
              <Texto
                as="span"
                color="var(--error-color)"
                font="var(--sub)"
                className={styles.msgErro}
              >
                {t("form.inputError.assuntoErr")}
              </Texto>
            )}
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
              className={`${styles.campoInput} ${styles.campoCont} ${
                emptyFields.name ? styles.campoVazio : ""
              }`}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (emptyFields.message) {
                  setEmptyFields({ ...emptyFields, message: false });
                }
              }}
            />
            {emptyFields.message && (
              <Texto
                as="span"
                color="var(--error-color)"
                font="var(--sub)"
                className={styles.msgErro}
              >
                {t("form.inputError.conteudoErr")}
              </Texto>
            )}
          </div>
        </div>
        <Button type="submit">
          <Texto color="var(--branco)" font="var(--nav)">
            {t("btn.btnContato")}
          </Texto>
        </Button>
        {showModal && (
          <ModalConfirmacao
            isOpen={showModal}
            onClose={handleFechar}
          />
        )}
      </form>
    </div>
  );
}

export default EmailForm;
