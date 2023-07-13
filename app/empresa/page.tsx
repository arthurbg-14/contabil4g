
export default function page() {
	return (
    <div className="flex flex-row pt-4 h-full">
      <div className="w-1/2 p-4">
        <h1 className="font-extrabold text-4xl mb-2">Nossa localização</h1>
        <span className="">O escritório de contabilidade 4G está localizado acima do Pet Shop Estação dos Animais, a entrada
          pode ser encontrada na R. Santo Antônio identificada por nossa placa.
        </span>
        <h2 className="font-extrabold text-4xl mt-8 mb-2">Horários de funcionamento</h2>
        <span>Trabalhamos de segunda a sexta conforme o horario:<br /></span>
        <span>Segunda: 8:00 - 11:00 | 13:00 - 18:00<br /></span>
        <span>Terça: 8:00 - 11:00 | 13:00 - 18:00<br /></span>
        <span>Quarta: 8:00 - 11:00 | 13:00 - 18:00<br /></span>
        <span>Quinta: 8:00 - 11:00 | 13:00 - 18:00<br /></span>
        <span>Sexta: 8:00 - 11:00 | 13:00 - 18:00<br /></span>
      </div>
      <div className="w-1/2 flex items-center">      <iframe className="shadow-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.33312844479!2d-51.92777592533275!3d-23.412330456132707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd127f2d9a977%3A0x2da324126b5bb143!2s4G%20Contabilidade!5e0!3m2!1sen!2sbr!4v1689259478634!5m2!1sen!2sbr" width="600" height="450" loading="lazy"></iframe>
</div>
    </div>
  )
}