import { MouseEventHandler, ReactNode } from "react"

interface Button {
	children?: ReactNode,
	onClick?: MouseEventHandler<HTMLButtonElement>,
	className?: string
}

const Button = ({children, onClick, className}: Button) => {
	return (
		<button className={"text-white dark:text-black bg-lime-600 dark:bg-lime-500 p-3 px-4 hover:bg-lime-700 dark:hover:bg-lime-400" + (className ? className : "")} onClick={onClick}>{children}</button>
	)
}

export default Button