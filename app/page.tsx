import Image from "next/image";
import Uñas from "./components/ui/Uñas";
import { prisma } from "@/src/lib/prisma";
import { motion } from "framer-motion";



async function getStayleUñas() {
  return await prisma.nailStyle.findMany()
}

export default async function Home() {

  const uñasStyle = await getStayleUñas()

  return (
    <>
      <div className="bg-white">
        <section className="relative w-full h-180 flex items-center justify-center bg-gray-900 ">
          <Image
            src="/productos/uña-8.webp"
            alt="imagen de uñas"
            fill
            className="opacity-60"
          />

          <div className="absolute text-center px-6 animate-fadeIn">
            <h1 className="text-4xl md:text-8xl font-bold mb-4 drop-shadow-lg text-white">
              Bienvenida a EAC Nails
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-md">
              Tu espacio para uñas elegantes y con estilo
            </p>
          </div>
        </section>

        <div className="text-center  px-4">
          <h2 className="text-4xl sm:text-5xl  font-bold text-pink-600 tracking-wide drop-shadow-md">
            Quiénes Somos
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto">
            Somos una tienda especializada en servicios de uñas, ofreciendo diseños elegantes y personalizados para que cada detalle refleje tu estilo y personalidad.
          </p>
        </div>

        <h2 className="text-4xl text-center font-bold my-16 text-gray-800">
          Explora nuestros estilos
        </h2>

        <div className="grid grid-cols-3 gap-10 place-items-center bg-gray-200 mt-50">
          {uñasStyle.map((uñasStyle) => (
            <Uñas
              key={uñasStyle.id}
              nailStyle={uñasStyle}
            />
          ))}
        </div>
      </div>


    </>
  );
}