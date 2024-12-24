import React from "react";

interface NavBarItemsProps {
  children: React.ReactNode;
  className?: string;
}

export default function NavBarItems({ children, className }: NavBarItemsProps) {
  return <div className={className}>{children}</div>;
}
