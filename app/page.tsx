import Image from "next/image";
import Uñas from "./components/ui/Uñas";
import { prisma } from "@/src/lib/prisma";


async function getStayleUñas(){
  return await prisma.nailStyle.findMany()
}

export default async function Home() {

  const uñasStyle = await getStayleUñas()

  return (
    <>
      <section className="relative w-full h-96 flex items-center justify-center">
        <Image
          src="/logo/fondo_eac_nails.jpeg"
          alt="Fondo EAC Nails"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Bienvenida a EAC Nails
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md">
            Tu espacio para uñas elegantes y con estilo
          </p>
        </div>
      </section>

      {/* Llamamos a Uñas y le pasamos los datos */}

      <div>
        {uñasStyle.map(uñasStyle => (
          <Uñas
          key={uñasStyle.id}
          nailStyle={uñasStyle}
          />
        ))}
      </div>
      
    </>
  );
}