import { useEffect } from "react";

export default function useHandleKeyPressing(key, fn) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key || event.key === key.toUpperCase()) {
        fn();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [key, fn]);
}
