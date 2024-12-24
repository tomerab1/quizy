import React from "react";

interface MenuItemsProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}

export default function MenuItems({
  children,
  className,
  isOpen,
}: MenuItemsProps) {
  return isOpen ? <div className={className || ""}>{children}</div> : null;
}
