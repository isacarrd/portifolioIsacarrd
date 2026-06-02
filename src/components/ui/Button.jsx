import styles from "./Button.module.css";

function Button({tamanho = "btnDesktopPadrao",estilo = "btnPreenchido", children, href, target, ...props}) {
  const buttonStyles = `${styles.btnBase} ${styles[tamanho]} ${styles[estilo]}`;
  const Especie = href ? "a" : "button";

  return (
    <Especie href={href} target={target} className={buttonStyles} {...props}>
      {children}
    </Especie>
  );
}

export default Button;
