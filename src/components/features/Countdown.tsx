"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    tickcounter?: unknown;
  }
}

export default function Countdown() {
  useEffect(() => {
    if (document.getElementById("tickcounter-sdk")) return;

    const script = document.createElement("script");
    script.id = "tickcounter-sdk";
    script.src = "//www.tickcounter.com/static/js/loader.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-[#F8F4EB]">
      <a
        data-type="countdown"
        data-id="9944762"
        className="tickcounter"
        style={{
          display: "block",
          width: "100%",
          position: "relative",
          paddingBottom: "25%",
        }}
        title="Alondra y Oscar"
        href="//www.tickcounter.com/"
      >
        Countdown
      </a>
    </div>
  );
}