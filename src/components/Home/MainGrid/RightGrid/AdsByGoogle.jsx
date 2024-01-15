"use client";
import { useEffect } from "react";

// Home-MainGrid-RightGrid
const AdsByGoogle = () => {
  useEffect(() => {
    const scriptElement = document.querySelector(
      'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9578547467175156"]'
    );
    const handleScriptLoad = () => {
      try {
        if (window.adsbygoogle) {
          adsbygoogle.push({});
        } else {
          scriptElement?.addEventListener("load", handleScriptLoad);
        }
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9578547467175156"
        data-ad-slot="7848180757"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdsByGoogle;
