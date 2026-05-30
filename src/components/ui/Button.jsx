import { forwardRef } from "react";
import styles from "./Button.module.css";

const Button = forwardRef(function Button(
  {
    tamanho = "btnDesktopPadrao",
    estilo = "btnPreenchido",
    children,
    ...props
  },
  ref
) {
  const buttonStyles = `${styles.btnBase} ${styles[tamanho]} ${styles[estilo]}`;

  return (
    <button ref={ref} className={buttonStyles} {...props}>
      {children}
    </button>
  );
});

export default Button;
