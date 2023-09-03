import React from "react";

export default function MainScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className="bg-red-500">{children}</article>;
}
