import { ReactElement } from "react";
import { IHeadingOne } from "../interfaces";

export default function HeadingOne({ children }: IHeadingOne): ReactElement {
  return (
    <h1 className="text-3xl uppercase font-semibold mb-5 text-teal-800">{children}</h1>
  );
}