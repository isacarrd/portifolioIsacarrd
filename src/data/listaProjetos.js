// import { useTranslation } from "react-i18next";
// const { t } = useTranslation();

import projHearOfPoets from "./projects/heartOfpoets.png"
import projMercadinho from "./projects/mercadinhoAragao.png"
import projRedragon from "./projects/redDragon.png"

import jsIcon from "../assets/images/devicons/javascript.svg";
import reactIcon from "../assets/images/devicons/reactnative.svg";
import nodeIcon from "../assets/images/devicons/nodejs.svg";
import typeIcon from "../assets/images/devicons/typescript.svg";
import supaIcon from "../assets/images/devicons/supabase.svg";
import gitIcon from "../assets/images/devicons/git.svg";
import cssIcon from "../assets/images/devicons/css3.svg";
import htmlIcon from "../assets/images/devicons/html5.svg";
import figIcon from "../assets/images/devicons/figma.svg";

export const listaProjetos = [
  {
    id: 1,
    chaveTitulo: "cardProj.proj1",
    chaveDesc: "modals.subtitle1",
    bgImage: projHearOfPoets,
    bgAlt: "Projeto Heart Of Poets",
    icoProj: [htmlIcon, cssIcon, gitIcon, figIcon],
    urlProj: "https://heartofpoets.vercel.app/",
    urlRepo: "https://github.com/isacarrd/heartOfPoets",
  },
  {
    id: 2,
    chaveTitulo: "cardProj.proj2",
    chaveDesc: "modals.subtitle2",
    bgImage: projMercadinho,
    bgAlt: "Projeto Mercadinho Aragão",
    icoProj: [htmlIcon, cssIcon, gitIcon, figIcon],
    urlProj: "https://mercadinho-aragao.vercel.app/",
    urlRepo: "https://github.com/isacarrd/mercadinhoAragao",
  },
  {
    id: 3,
    chaveTitulo: "cardProj.proj3",
    chaveDesc: "modals.subtitle3",
    bgImage: projRedragon,
    bgAlt: "Projeto Redragon",
    icoProj: [htmlIcon, cssIcon, gitIcon, figIcon],
    urlProj: "https://redragon-draconic.vercel.app/",
    urlRepo: "https://github.com/isacarrd/redragon-draconic",
  },
];