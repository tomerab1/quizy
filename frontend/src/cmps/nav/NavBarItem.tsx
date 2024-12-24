import React from "react";

interface NavBarItemProps {
  children: React.ReactNode;
  className: string;
}

export default function NavBarItem({ children, className }: NavBarItemProps) {
  return <button className={className}>{children}</button>;
}
