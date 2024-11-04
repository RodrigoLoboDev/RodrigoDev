import useDev from "@/hook/useDev";
import Image from "next/image";
import { useState } from "react";


export default function Carousel() {

    const { proyectos, t } = useDev();

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(proyectos.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === proyectos.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    console.log(current);

  return (
    <>
        <div className=" relative overflow-hidden lg:h-[23rem] h-44 ">
        <div
            className={` flex `}
            style={{
            transform: `translateX(-${current * 0.1}%)`,
            }}
        >
                {proyectos.map( (proyecto, i) => (
                    <div className={`${current == i ? 'flex-1' : ' w-0 h-0 ' }`} key={proyecto.id} >
                        <div className="relative items-center justify-center overflow-hidden cursor-pointer">
                            <div className='h-50 w-70'>
                                <Image 
                                    width={900}
                                    height={960}
                                    src={proyecto.src}
                                    alt='Imagen clima app'
                                    className='w-full h-full rounded-lg shadow-xl object-cover'
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black'></div>
                        </div>
                    </div>
                ))}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex px-5 text-3xl">
            <button onClick={previousSlide} className=" bg-white rounded-full w-8 h-8 lg:w-auto lg:h-auto ">
                <Image 
                    width={50}
                    height={50}
                    src={'/img/preview.svg'}
                    alt="Imagen Preview"
                />
            </button>
            <button onClick={nextSlide} className=" bg-white rounded-full w-8 h-8 lg:w-auto lg:h-auto ">
                <Image 
                    width={50}
                    height={50}
                    src={'/img/next.svg'}
                    alt="Imagen Next"
                />   
            </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {proyectos.map((s, i) => {
            return (
                <div
                onClick={() => {
                    setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-3 h-3 lg:w-5 lg:h-5 cursor-pointer  ${
                    i == current ? "bg-white" : "bg-gray-500"
                }`}
                ></div>
            );
            })}
        </div>
        </div>

        <div className=" overflow-hidden h-28 mt-3 ">
            <div
                className={` flex `}
                style={{
                transform: `translateX(-${current * 0.1}%)`,
                }}
            >
                {proyectos.map( (proyecto, i) => (
                    <div className={`${current == i ? 'flex-1' : ' hidden ' } text-center`} key={proyecto.id}>
                        <div className=" w-full h-full ">
                            <h3 className='text-lg lg:text-3xl font-bold dark:text-gray-300'>{proyecto.nombre}</h3>
                            <p className=' text-xs lg:text-lg italic mb-3 dark:text-gray-200'>{proyecto.descripcion}</p>
                            <a href={`${proyecto.url}`} target='_blank' className='rounded-full shadow-sm shadow-black/60 bg-neutral-900 py-2 px-3.5 text-xs lg:text-sm capitalize text-white'>{t("proyectos.a")}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
