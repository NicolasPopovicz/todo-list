import { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <footer className="absolute bottom-0 inset-x-auto py-4 text-teal-800 bg-[whitesmoke] w-full text-center bg-opacity-50 shadow-md">
      <p>Made by <a href="https://github.com/NicolasPopovicz" className="hover:underline">Nicolas</a></p>
    </footer>
  )
}