import { ChangeEventHandler } from "react";

export interface ITask {
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
