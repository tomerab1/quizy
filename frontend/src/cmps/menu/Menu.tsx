import React from "react";

interface MenuProps {
  children: React.ReactNode;
  className?: string;
  menuRef: React.RefObject<HTMLDivElement>;
}

export default function Menu({ children, className, menuRef }: MenuProps) {
  return (
    <div ref={menuRef} className={className || ""}>
      {children}
    </div>
  );
}
