import { useEffect, useRef } from "react";

export default function AdsterraBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    // Cria a variável global usada pelo Adsterra
    window.atOptions = {
      key: "446cdb09a838a32874755d881de11f2f",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };

    // Cria a tag script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//www.highperformanceformat.com/446cdb09a838a32874755d881de11f2f/invoke.js";

    // Limpa antes de injetar (evita duplicar ao re-renderizar)
    if (adRef.current) {
      adRef.current.innerHTML = "";
      adRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={adRef}
      style={{ width: "728px", height: "90px", margin: "0 auto" }}
    />
  );
}
