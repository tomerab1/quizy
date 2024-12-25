import React from "react";

interface MenuItemsProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export default function MenuItems({ children, isOpen }: MenuItemsProps) {
  return isOpen ? <div>{children}</div> : null;
}
