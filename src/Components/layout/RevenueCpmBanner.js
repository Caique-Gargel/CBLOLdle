import { useEffect, useRef } from "react";

export default function RevenueCpmBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = "//pl27675217.revenuecpmgate.com/7d1b2ae2bc294f70a0839626234c9448/invoke.js";

    if (adRef.current) {
      adRef.current.innerHTML = ""; // limpa antes
      adRef.current.appendChild(script);
    }
  }, []);

  return (
    <div>
      <div
        id="container-7d1b2ae2bc294f70a0839626234c9448"
        ref={adRef}
        style={{ width: "100%", minHeight: "100px", margin: "0 auto" }}
      />
    </div>
  );
}
