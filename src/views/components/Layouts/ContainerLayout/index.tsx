import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  classNames?: string;
}

export const ContainerLayout = ({
  children,
  classNames = "",
}: ContainerProps) => {
  return <div className={`container mx-auto ${classNames}`}>{children}</div>;
};
