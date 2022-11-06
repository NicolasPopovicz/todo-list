import { ReactElement } from "react";
import { IButton } from "../interfaces";

export default function Button({children, typeButton}: IButton): ReactElement {
  return (
    <button type={typeButton} className="py-2 px-3 border border-teal-300 bg-teal-300 hover:bg-white hover:text-teal-500 rounded-md transition-all duration-150">
      {children}
    </button>
  )
}