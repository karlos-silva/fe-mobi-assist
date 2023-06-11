import { prisma } from "@/lib/prisma"

export default async function Home() {

  return (
    <div className="p-4">
      <footer className="w-full flex justify-center items-center">
        <a className="bg-gray-700 w-full p-2 text-white text-center cursor-pointer" href="/profile" >Ver Perfil</a>
      </footer>
    </div>
  )
}
