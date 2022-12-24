import { ChangeEventHandler, ReactNode } from "react";

export interface ITask {
	id: number;
	description: string;
}

export interface InputInterface {
	type: string;
	value: string;
	onChange: ChangeEventHandler;
}

export interface IButton {
	children: string;
	typeButton: "button" | "submit" | "reset";
}

export interface IHeadingOne {
	children: string[];
}

export interface IMainWrapper {
	children: ReactNode;
}
