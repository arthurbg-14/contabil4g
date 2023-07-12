import { MouseEventHandler, ReactNode } from "react"

interface Button {
	children?: ReactNode,
	onClick?: MouseEventHandler<HTMLButtonElement>,
	className?: string,
	ghost?: boolean
}

const Button = ({children, onClick, className, ghost}: Button) => {
	if (ghost) {
		return <button className={"text-black font-extrabold border-2 dark:text-white border-lime-600 dark:border-lime-500 p-3 px-4 hover:bg-lime-600 hover:text-white dark:hover:bg-lime-500 dark:hover:text-black transition-colors" + (className ? className : "")} onClick={onClick}>{children}</button>
	}
	return (
		<button className={"text-white dark:text-black bg-lime-600 dark:bg-lime-500 p-3 px-4 hover:bg-lime-700 dark:hover:bg-lime-400" + (className ? className : "")} onClick={onClick}>{children}</button>
	)
}

export default Button