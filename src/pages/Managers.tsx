import { useEffect } from "react";

export default function Managers() {
  // Phase 2: full React port. For now redirect to the existing static page.
  useEffect(() => {
    window.location.replace("/managers.html");
  }, []);
  return null;
}
