import { ReactElement } from "react";
import { InputInterface } from "../interfaces";

export default function Input({ type, value, onChange }: InputInterface): ReactElement {
  return (
    <input type={type} value={value} onChange={onChange} className="mr-2 py-2 px-3 border rounded outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-150" />
  )
}