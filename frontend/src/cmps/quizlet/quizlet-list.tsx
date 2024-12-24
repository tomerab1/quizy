import React from "react";

interface QuizletListProps {
  children: React.ReactNode;
  className?: string;
}

export default function QuizletList({ children, className }: QuizletListProps) {
  return <ul className={className || ""}>{children}</ul>;
}
