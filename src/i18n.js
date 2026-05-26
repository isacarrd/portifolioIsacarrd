import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      btn: {
        btnCv: "Baixar CV",
        btnContato: "Contate-me",
        btnProjeto: "Ver Projeto",
        btnRepositorio: "Ver Repositório",
      },
      header: {
        about: "Sobre",
        habilites: "Habilidades",
        projects: "Projetos",
      },
      hero: {
        title: "Visitante",
        sub: "Olá",
      },
      about: {
        title: "Quem sou eu",
        description: "Desenvolvedora web especializada em frontend, possuo um ano de experiência prática no desenvolvimento de aplicações web, com ênfase em projetos pessoais que implementam princípios básicos de usabilidade e organização do código."
      },
      infos: {
        title1: "Habilidades",
        title2: "Projetos",
      },
      form: {
        title: "Entre em contato",
        email_desc: "Endereço de Email",
        assuntoTitle: "Assunto",
        assunto_desc: "Assunto ou título da mensagem",
        conteudoTitle: "Conteúdo",
        conteudo_desc: "Conteúdo, aquilo que deseja enviar: crítica, proposta, etc."
      },
      cardProj: {
        hover: 'Info+',
        proj1: "heartOfPoets"
      },
      modalProj: {
        subtitle: "Página com navegação simples, imitando a estilização de uma rede social, sendo voltada para poesias e fotografia.",
      }
    }
  },
  en: {
    translation: {
      btn: {
        btnCv: "Download CV",
        btnContato: "Contact-me",
        btnProjeto: "View Project",
        btnRepositorio: "View Repository",
      },
      header: {
        about: "About",
        habilites: "Habilites",
        projects: "Projects",
      },
      hero: {
        title: "Visitor",
        sub: "Hello",
      },
      about: {
        title: "Who am I",
        description: "Web developer specializing in frontend, I have one year of practical experience in developing web applications, with an emphasis on personal projects that implement basic principles of usability and code organization."
      },
      infos: {
        title1: "Habilites",
        title2: "Projects",
      },
      form: {
        title: "Get in touch",
        email_desc: "Email Address",
        assuntoTitle: "Subject",
        assunto_desc: "Subject or title of the message",
        conteudoTitle: "Content",
        conteudo_desc: "Content, that which you wish to send: criticism, proposal, etc."
      },
      cardProj: {
        hover: 'Info +',
        proj1: "heartOfPoets"
      },
      modalProj: {
        subtitle: "A page with simple navigation, mimicking the style of a social network, focused on poetry and photography.",
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    supportedLngs: ["pt", "en"],
    load: 'languageOnly',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });


export default i18n;