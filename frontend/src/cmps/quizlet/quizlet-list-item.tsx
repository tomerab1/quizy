import React from "react";

interface QuizletListItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function QuizletListItem({
  children,
  className,
}: QuizletListItemProps) {
  return <li className={className || ""}>{children}</li>;
}
