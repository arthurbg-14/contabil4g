
"use client"
import { useEffect, useState } from "react"
import { ReactNode } from "react"
import Button from "./Button"
import Link from "next/link"

const Header = () => {
	let [theme, setTheme] = useState("")
	
	const toggleDarkMode = () => {
		let newTheme = "light"
		if(theme == "dark"){newTheme = "light"}
		if(theme == "light"){newTheme = "dark"}

		localStorage.theme = newTheme
		document.documentElement.className = ''
		document.documentElement.classList.add(newTheme)
		setTheme(newTheme)
	}
	
	return (
	<header className="dark:bg-black w-full h-20 px-4 flex items-center justify-between shadow-md text-sm">
		<img className="h-full p-4 block dark:hidden" src="/logo.png" onClick={toggleDarkMode}/>
		<img className="h-full p-4 hidden dark:block" src="/dark_logo.png" onClick={toggleDarkMode}/>
		<div className="flex flex-row h-full">
			<HeaderButton href="/">HOME</HeaderButton>
			<HeaderButton href="/empresa">EMPRESA</HeaderButton>
			<HeaderButton href="/servicos">SERVIÇOS</HeaderButton>
			<HeaderButton href="/planos">PLANOS</HeaderButton>
		</div>
		<Button>ÁREA DO CLIENTE</Button>
	</header>
	)
}

const HeaderButton = ({children, href} : {children?: ReactNode, href:string}) => {
	let [sizeOfGreenBar, setSizeOfGreenBar] = useState("w-0")
		
	useEffect(() => {
		const alreadyInPath = window.location.pathname == href
		if (alreadyInPath) {setSizeOfGreenBar("w-full")}
	})

	return (
		<Link href={href} className="relative group flex flex-col items-center justify-center text-black dark:text-white h-full w-[7rem] hover:bg-zinc-200 dark:hover:bg-zinc-700">
			{children}
			<div className={sizeOfGreenBar + " group-hover:w-full h-[4px] absolute bottom-0 bg-lime-600 dark:bg-lime-500 transition-all"}></div>
		</Link>
	)
}

export default Header