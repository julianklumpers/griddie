import React from "react";

export const useClickOutside = <T extends Element>(cb: () => void): React.RefObject<T> => {
  const ref = React.useRef<T>(null);
  const cbRef = React.useRef<typeof cb>();

  React.useEffect(() => (cbRef.current = cb));

  React.useEffect(() => {
    if (ref.current) {
      const handleClick = (event: MouseEvent) => {
        if (!ref.current?.contains(event.target as Document)) {
          cbRef.current?.();
        }
      };

      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return ref;
};
