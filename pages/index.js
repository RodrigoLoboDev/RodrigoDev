import Acercademi from "@/components/Acercademi"
import Contacto from "@/components/Contacto"
import LayoutPrincipal from "@/layouts/LayoutPrincipal"
import Proyectos from "@/components/Proyectos"
import useDev from "@/hook/useDev"
import Image from "next/image"

import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
  
  const { t } = useDev()

  return (
    <>
      <LayoutPrincipal
        title={`Inicio`}
        description={'Portafolio, FullStack Developer'}
      >
        <div className="mt-10 md:flex gap-10">
          <div className="lg:w-[60%]">
            <p
              className="text-gray-500 dark:text-gray-200 font-semibold"
            >{t("index.p1")}</p>
            <h1
              className=" text-4xl lg:text-5xl lg:w-6/7 font-black text-gray-700 dark:text-gray-400 leading-tight"
            >Lobo, Jesús Luis Rodrigo</h1>
            <p 
              className=" text-xl lg:text-xl font-bold text-gray-500 dark:text-gray-300 mt-5"
            >{t("index.p2")} <span className="font-black text-gray-700 dark:text-gray-200 text-2xl lg:text-3xl block">
                <Typewriter 
                  words={['Docente', '&', 'FullStack Developer']}
                  loop={5}
                  cursor
                  cursorStyle='|'
                  typeSpeed={120}
                  deleteSpeed={80}
                />
              </span>
            </p>
            <p className="mt-5 text-gray-400 dark:text-gray-200 text-sm lg:text-lg">{t("index.p3")}</p>
          </div>
          <div className="flex lg:w-[40%] justify-center items-center mt-5 lg:mt-0">
            <div className=" rounded-full h-80 w-80 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500">
              <Image 
                width={1050}
                height={1050}
                src={'/img/yoppp.png'}
                alt="Imagen avatar"
                className="h-full w-full object-cover rounded-full shadow-xl"
              />
            </div>
          </div>
        </div>

        <Acercademi />
        <Proyectos />
        <Contacto />
      </LayoutPrincipal>
    </>
  )
}
