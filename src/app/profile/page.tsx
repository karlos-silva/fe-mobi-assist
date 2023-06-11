import { prisma } from "@/lib/prisma"
import { FiArrowLeft } from 'react-icons/fi'


export default async function Profile() {
  const passenger = await prisma.passenger.findUnique({
    where: {
      id: '2cbbf9a3-5c03-4ea7-b411-3632f7970f32'
    }
  })

  const deficiency = await prisma.deficiency.findUnique({
    where: {
      id: passenger?.deficiency_id
    }
  })

  return (
    <div className="p-4">
      <header className="flex flex-row items-center "><a href="/home"><FiArrowLeft color="#10b981" className="mr-2" /></a><h4>Perfil do usuário</h4></header>
      <section className="flex items-center justify-between border-b-2 pb-4">
        <p className="font-bold text-lg">{passenger?.name}</p>
        <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" className="w-16 h-16 rounded-full bg-gray-700" />
      </section>
      <section className="w-full flex justify-center items-center mt-4 gap-2">
        <a className="bg-slate-200 w-full p-2 text-white text-center cursor-pointer rounded-md h-16 flex items-center justify-center" href="/races" ><p className="text-zinc-950">Corridas</p></a>
        <a className="bg-slate-200 w-full p-2 text-white text-center cursor-pointer rounded-md h-16 flex items-center justify-center" href="" ><p className="text-zinc-950">Pagamento</p></a>
        <a className="bg-slate-200 w-full p-2 text-white text-center cursor-pointer rounded-md h-16 flex items-center justify-center" href="" ><p className="text-zinc-950">Ajuda</p></a>
      </section>
      <section className="pt-2">
        <h4 className="pb-2">Informações</h4>

        <div>
          <p><b>Telefone:</b> {passenger?.phone}</p>
          <p><b>Email:</b> {passenger?.email}</p>
          <p><b>Deficiencia:</b> {deficiency?.description}</p>
        </div>
      </section>

    </div>
  )
}
