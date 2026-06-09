import React, { useState } from "react";

function Texto({
  as = "p",
  children,
  color,
  font,
  textAlign,
  webkitTextStroke = "none",
  letterSpacing = 0,
  opacity,
  hoverColor,
  disableHover = false,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  const Txt = as;

  const corBase = color || (Txt === "a" || Txt === "span" ? "var(--branco)" : undefined);
  const corDeHover = hoverColor || (Txt === "a" || Txt === "span" ? "var(--laranja)" : corBase);
  const corFinal = isHovered && !disableHover ? corDeHover : corBase;

  return (
    <Txt
      style={{
        color: corFinal,
        font: font,
        WebkitTextStroke: webkitTextStroke,
        letterSpacing: letterSpacing,
        opacity: opacity,
        textAlign: textAlign,
        textDecoration: Txt === "a" ? "none" : undefined,
        transition: disableHover ? "none" : "color 0.3s ease",
      }}
      onMouseEnter={!disableHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={!disableHover ? () => setIsHovered(false) : undefined}
      {...props}
    >
      {children}
    </Txt>
  );
}

export default Texto;
