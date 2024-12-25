import React, { useEffect } from "react";

interface MenuProps {
  children: React.ReactNode;
  className?: string;
  menuRef: React.RefObject<HTMLDivElement>;
}

export default function Menu({ children, className, menuRef }: MenuProps) {
  useEffect(() => {
    console.log(menuRef);
  }, []);

  return (
    <div ref={menuRef} className={className || ""}>
      {children}
    </div>
  );
}
