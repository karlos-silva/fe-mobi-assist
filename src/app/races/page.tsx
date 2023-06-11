import { prisma } from "@/lib/prisma"
import { FiArrowLeft } from 'react-icons/fi'


export default async function Rides() {
  const races = await prisma.race.findMany({
    where: {
      passenger_id: '2cbbf9a3-5c03-4ea7-b411-3632f7970f32'
    }
  })



  return (
    <div className="p-4">
      <header className="flex flex-row items-center "><a href="/profile"><FiArrowLeft color="#10b981" className="mr-2" /></a><h4>Corridas</h4></header>
      <div className="mt-4">{races.map(async (race) => {
        const driver = await prisma.driver.findUnique({
          where: {
            id: race.driver_id
          }
        })
        return (
          <div key={race.id} className="bg-slate-200 p-2 mb-2 rounded-md">
            <p className="text-sm">Data: {race.startTime.toLocaleDateString('pt-br')}</p>
            <p className="text-sm">Motorista: {driver?.name}</p>
            <p className="text-sm">Valor da corrida: R${race.raceValue}</p>
          </div>
        )
      })}</div>
    </div>
  )
}
