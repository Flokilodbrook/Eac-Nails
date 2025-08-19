"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image"

export default function NavBar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscar:", search);
  };

  return (

    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm text-xl">
        <div className="container mx-auto flex items-center justify-between h-24 px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="logo de la empresa"
              width={100}
              height={80}
              className="object-contain"
            />
          </Link>

          {/* Menú */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700 text-xl">
            <Link href="/" className="hover:text-pink-500 hover:text-2xl transition ">Inicio</Link>
            <Link href="/productos" className="hover:text-pink-500 hover:text-2xl transition">Productos</Link>
          </div>

          {/* Buscador */}
          <div className="hidden lg:flex bg-gray-900 items-center w-[400px] h-[45px] rounded-lg px-3">
            <input
              type="text"
              placeholder="Buscar..."
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
            />
            <Search
              className="w-6 h-6 text-gray-600 cursor-pointer transition-transform duration-300 hover:scale-125 hover:rotate-12 hover:text-pink-500"
            />
          </div>

          {/* Carrito y Login */}
          <div className="flex items-center gap-6">
            {/* Carrito */}
            <Link href="/carrito" className="relative">
              <ShoppingCart className="w-7 h-7 text-gray-600 hover:text-pink-500 transition" />
              <span className="absolute -top-2 -right-2 bg-gray-700 text-white px-1.5 py-0.5 text-xs rounded-full font-sans shadow-md">
                2
              </span>
            </Link>

            {/* Login */}
            <Link
              href="/login"
              className="flex items-center gap-2 hover:bg-pink-400 text-gray-700 px-3 py-2 rounded-lg transition"
            >
              <User className="w-7 h-7" />
              <span className="hidden md:inline">Login</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Barra de promociones */}
      <div className="w-full bg-gray-200 overflow-hidden text-xl">
        <div className="animate-marquee whitespace-nowrap py-2 font-bold  font-sans x|">
          <span className="mx-8"> 10% de descuento en uñas acrílicas</span>
          <span className="mx-8"> Envío gratis en compras mayores a $500</span>
          <span className="mx-8"> 2x1 en esmaltes seleccionados</span>
        </div>
      </div>


    </>


  );
}
