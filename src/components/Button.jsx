import styles from "./Button.module.css";

function Button({
  tamanho = "btnDesktopPadrao",
  estilo = "btnPreenchido",
  children,
  ...props
}) {

  const buttonStyles = `${styles.btnBase} ${styles[tamanho]} ${styles[estilo]}`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
}

export default Button;
