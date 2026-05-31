import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.href = "/site.html";
  }, []);

  return (
    <noscript>
      <meta httpEquiv="refresh" content="0;url=/site.html" />
    </noscript>
  );
};

export default Index;
