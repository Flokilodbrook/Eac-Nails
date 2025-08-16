
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-white py-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                    {/* Logo o nombre de la marca */}
                    <div className="mb-6 md:mb-0">
                        <Image src={"/logo/logo.png"}
                        alt="Logo tienda"
                        width={120}
                        height={60}
                        />
                        <p className="text-gray-400">Productos ecológicos y artesanales</p>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-500 transition-colors">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-500 transition-colors">
                            <FaTiktok size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>

                <div className="text-center mt-6 text-gray-500 text-sm">
                    © {new Date().getFullYear()} MiTienda. Todos los derechos reservados.
                </div>
            </footer>
        </>
    )
}
