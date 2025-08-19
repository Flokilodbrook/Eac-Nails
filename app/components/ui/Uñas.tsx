import { NailStyle } from "@/app/generated/prisma"
import Image from "next/image"
type UñasIconProps = {
  nailStyle: NailStyle
}

export default function Uñas({ nailStyle }: UñasIconProps) {
  return (


    <div className="bg-white w-full max-w-sm sm:max-w-md rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-pink-200">
      <Image
        src={`/productos/${nailStyle.image}.webp`}
        alt={`Imagen de ${nailStyle.name}`}
        width={400}
        height={400}
        className="object-cover w-full h-60 sm:h-72"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-pink-600">
          {nailStyle.name}
        </h3>
        <p className="text-gray-600 mt-2 text-base sm:text-lg">
          ${nailStyle.price}
        </p>

        {/* Botones */}
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
          <button
            className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-500 transition"
            //onClick={() => agregarAlCarrito(nailStyle)}
          >
            Agregar al carrito
          </button>

          <button
            className="bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-500 transition"
            //onClick={() => irAPagar(nailStyle)}
          >
            Pagar
          </button>
        </div>
      </div>
    </div>



  )
}
