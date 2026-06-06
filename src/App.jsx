import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { useTranslation } from "react-i18next";
import style from "./App.module.css";
import "./index.css";

import LangButton from "./components/form/LangButton";
import Texto from "./components/ui/Texto";
import TextType from "./components/ui/TextType";
import Botao from "./components/ui/Botao"
import SecaoHabilidades from "./components/sections/SecaoHabilidades"
import SecaoProjetos from "./components/sections/SecaoProjetos"
import EmailForm from "./components/form/EmailForm"

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className={style.canvasContainer}>
        <ShaderGradientCanvas>
          <ShaderGradient
            control="query"
            urlString="https://shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=0.4&cAzimuthAngle=180&cDistance=2.4&cPolarAngle=95&cameraZoom=1&color1=%23242424&color2=%230c0c0c&color3=%23b4b4b4&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=-2.1&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=225&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.8&uFrequency=5.5&uSpeed=0.2&uStrength=3&uTime=0.2&wireframe=false"
          />
        </ShaderGradientCanvas>
      </div>
      <div className={style.noise} />
      <header className={style.headerPort}>
        <nav>
          <ul>
            <li>
              <Texto
                as="a"
                color="var(--branco)"
                font="var(--nav)"
                href="#sobre"
              >
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
            <div className={style.espacoLing} role="button">
              <LangButton />
            </div>
          </ul>
        </nav>
      </header>
      <section className={style.hero}>
        <div className={style.tit}>
          <TextType
            text={[t("hero.sub")]}
            font="var(--miniHome)"
            opacity="var(--padrao-opacity)"
            typingSpeed={130}
            pauseDuration={1500}
            showCursor={false}
            loop={false}
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
          <TextType
            text={[t("hero.title")]}
            font="var(--home)"
            color="var(--branco)"
            typingSpeed={200}
            pauseDuration={1500}
            initialDelay={800}
            showCursor
            loop={false}
            cursorCharacter="▎"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
          <div className={style.sub}>
            <Texto
              as="p"
              color="var(--branco)"
              font="var(--sub)"
              opacity="var(--miniHome-opacity)"
            >
              Dev Front-end
            </Texto>
            <Texto
              as="p"
              color="var(--laranja)"
              font="var(--miniHome)"
              opacity="var(--miniHome-opacity)"
            >
              @isacarrd
            </Texto>
          </div>
        </div>
      </section>
      <main>
        <section className={style.about}>
          <div className={style.abtCont}>
            <div className={style.imgAbt}>
              <img
                src="/src/assets/images/logos/catLogo-256.svg"
                alt="CatLogo"
              />
            </div>
            <div className={style.info}>
              <div className={style.textos}>
                <Texto
                  as="h1"
                  color="var(--branco)"
                  font="var(--h1)"
                  textAlign="center"
                >
                  {t("about.title")}
                  <span id="abtSpan">?</span>
                </Texto>
                <div className={style.ph}>
                  <Texto
                    as="p"
                    color="var(--branco)"
                    font="var(--ph)"
                    textAlign="justify"
                    opacity="var(--padrao-opacity)"
                  >
                    {t("about.description")}
                  </Texto>
                </div>
              </div>
              <div className={style.links}>
                <div className={style.linkSocial}>
                  <a
                    href="https://www.linkedin.com/in/isabele-cardoso-arag%C3%A3o-isacarrd/"
                    target="_blank"
                    rel="author"
                  >
                    <img
                      src="/src/assets/images/icons/linkedin.svg"
                      alt="Linkedin"
                    />
                  </a>
                  <a
                    href="https://github.com/isacarrd"
                    target="_blank"
                    rel="author"
                  >
                    <img
                      src="/src/assets/images/icons/github.svg"
                      alt="Github"
                    />
                  </a>
                </div>
                <Botao
                  href={"/src/data/CV.docx"}
                  download="CV.docx"
                  type="application/docx"
                >
                  <Texto as="a" color="var(--branco)" font="var(--botao)">
                    {t("btn.btnCv")}
                  </Texto>
                </Botao>
              </div>
            </div>
          </div>
        </section>
        <SecaoHabilidades />
        <SecaoProjetos />
      </main>
      <EmailForm />
      <footer>
        <div className={style.fotTxt}>
          <img src="./src/assets/images/icons/copyright.svg" alt="Copyright" />
          <Texto
            as="span"
            color="var(--preto)"
            font="var(--footer)"
          >
            2026
          </Texto>
        </div>
      </footer>
    </>
  );
}

export default App;
