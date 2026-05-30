import React, { useState } from "react";

function Texto({
  as = "p",
  children,
  color,
  font,
  textAlign,
  webkitTextStroke = "none",
  letterSpacing = 0,
  opacity = 1,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  const Txt = as;
  let corFinal = color;

  if (Txt === "a") {
    corFinal = isHovered ? "var(--laranja)" : color || "var(--branco)";
  }

  return (
    <Txt
      style={{
        color: corFinal,
        font: font,
        WebkitTextStroke: webkitTextStroke,
        letterSpacing: letterSpacing,
        opacity: opacity,
        textAlign:textAlign,
        textDecoration: Txt === "a" ? "none" : undefined,
        transition: Txt === "a" ? "color 0.3s ease" : "none",
      }}
      onMouseEnter={Txt === "a" ? () => setIsHovered(true) : undefined}
      onMouseLeave={Txt === "a" ? () => setIsHovered(false) : undefined}
      {...props}
    >
      {children}
    </Txt>
  );
}

export default Texto;
