
"use client"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import { ReactNode } from "react"
import Button from "./Button"
import Link from "next/link"

const Header = () => {
	return (
	<header className="dark:bg-black w-full h-20 px-4 flex items-center justify-evenly shadow-md text-sm">
		<img className="h-full p-4 block dark:hidden" src="/logo.png"/>
		<div className="flex flex-row h-full">
			<HeaderButton href="/">HOME</HeaderButton>
			<HeaderButton href="/empresa">EMPRESA</HeaderButton>
			<HeaderButton href="/servicos">SERVIÇOS</HeaderButton>
		</div>
		<Button>ABRA SUA EMPRESA</Button>
	</header>
	)
}

const HeaderButton = ({children, href} : {children?: ReactNode, href:string}) => {
	const path = usePathname()
	let [sizeOfGreenBar, setSizeOfGreenBar] = useState("w-0")
		
	useEffect(() => {
		const alreadyInPath = path == href
		if (alreadyInPath) {setSizeOfGreenBar("w-full")}
		else {setSizeOfGreenBar("w-0")}
	})

	return (
		<Link href={href} className="relative group flex flex-col items-center justify-center text-black dark:text-white h-full w-[7rem] hover:bg-zinc-200 dark:hover:bg-zinc-700">
			{children}
			<div className={sizeOfGreenBar + " group-hover:w-full h-[4px] absolute bottom-0 bg-lime-600 dark:bg-lime-500 transition-all"}></div>
		</Link>
	)
}

export default Header