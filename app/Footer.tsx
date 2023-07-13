"use client"
const Footer = () => {
	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
	}

	return (
	<footer className="dark:bg-black w-full h-40 px-4 flex items-center justify-evenly shadow-md text-sm">
		<a className="hover:text-sky-600 hover:scale-110 transition-transform" href="tel:4430240844">Telefone: (44) 3024-0844</a>
		<div className="flex flex-col">
			<span className="hidden peer-hover:block">Texto Copiado para área de transferencia</span>
			<button onClick={() => copyToClipboard("4g@contabil4g.com.br")} className="peer hover:text-sky-600 hover:scale-110 transition-transform active:text-lime-600">E-mail: 4g@contabil4g.com.br</button>
		</div>
	</footer>
	)
}

export default Footer