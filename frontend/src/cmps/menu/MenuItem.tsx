import React from "react";

interface MenuItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function MenuItem({ children, className }: MenuItemProps) {
  return <div className={className || ""}>{children}</div>;
}
