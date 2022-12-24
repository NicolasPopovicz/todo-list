import { ReactElement, ReactNode } from "react";
import { IMainWrapper } from "../interfaces";

export default function MainWrapper({ children }: IMainWrapper): ReactElement {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center py-10 h-full">{children}</main>
  )
}