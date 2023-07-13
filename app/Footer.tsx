"use client"
const Footer = () => {
	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
	}
	function showCopiedText() {
		const copiedText: HTMLElement | null = document.querySelector("#copied-text")

		copiedText!.style.display = "block"

		setTimeout(() => {
			copiedText!.style.display = "none"
		}, 2000)
	}

	return (
	<footer className="dark:bg-black w-full h-[8rem] px-4 flex items-center justify-evenly shadow-inner text-sm">
		<a className="hover:text-sky-600 hover:scale-110 transition-transform" href="tel:4430240844">Telefone: (44) 3024-0844</a>
		<div className="flex flex-col">
			<span className="hidden transition-all" id="copied-text">Texto Copiado para área de transferencia</span>
			<button onClick={() => {
				copyToClipboard("4g@contabil4g.com.br")
				showCopiedText()
				}} className="hover:text-sky-600 hover:scale-110 transition-transform active:text-lime-600">E-mail: 4g@contabil4g.com.br</button>
		</div>
		<a className="hover:text-sky-600 hover:scale-110 transition-transform" href="https://goo.gl/maps/LigzivR9oxU6G8Xu6">Av. Pedro Taques, 1041, Maringá - PR, 87030-000</a>
	</footer>
	)
}

export default Footer