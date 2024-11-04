import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // Estilos del módulo de navegación
import { useRef } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, VideoCameraIcon, LinkIcon } from '@heroicons/react/20/solid'
import useDev from '@/hook/useDev';
import Image from 'next/image';
import { Projects } from '@/data/projects';


const CarouselProjects = () => {

    const { t } = useDev();

    // Referencias para los botones personalizados
    const swiperRef = useRef(null);

  return (
    <div className="relative max-w-4xl">
        <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
            prevEl: swiperRef.current?.navigation?.prevEl, // Referencia al botón de 'Prev'
            nextEl: swiperRef.current?.navigation?.nextEl, // Referencia al botón de 'Next'
        }}
        onSwiper={(swiper) => { swiperRef.current = swiper }} // Asignamos el Swiper a la ref
        loop={Projects.length}
        breakpoints={{
            // Cuando la pantalla es >= 640px (dispositivos pequeños)
            640: {
            slidesPerView: 2, // Muestra 1 card
            spaceBetween: 10,
            },
            // Cuando la pantalla es >= 768px (tablets)
            768: {
            slidesPerView: 2, // Muestra 2 cards
            spaceBetween: 20,
            },
            // Cuando la pantalla es >= 1024px (laptops y desktops)
            1024: {
            slidesPerView: 2, // Muestra 3 cards
            spaceBetween: 30,
            }
        }}
        >
        {Projects.map(project => (
            <SwiperSlide key={project.id}>
            <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-900 transition-transform duration-300 hover:shadow-xl">
                <div className="relative group">
                    {/* Contenido del Card */}
                    <div className=" h-48 overflow-hidden">
                        <img className=" max-w-full h-auto" src={project.src} alt={project.nombre} />
                    </div>
                    <div className="space-y-2 p-3">
                        <h3 className="text-black dark:text-gray-300 font-black uppercase text-xl">{project.nombre}</h3>
                        <p className=' dark:text-white text-sm'>{project.descripcion}</p>
                    </div>
                    
                    {/* Mascara */}
                    <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href={project.repositorio} target='_blank'>
                            <Image 
                                width={100}
                                height={100}
                                src={`/img/github.svg`}
                                alt='logo github'
                                className="w-10 text-white bg-white"
                            />
                        </a>
                        <a href={project.demo} target='_blank'>
                            <VideoCameraIcon className=' w-12 h-12 text-white' />
                        </a>
                        <a href={project.url} target='_blank'>
                            <LinkIcon className=' w-12 h-12 text-white' />
                        </a>
                    </div>

                </div>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>

        {/* Botones personalizados */}
        <button
        typeof='button'
        onClick={() => {
            if (swiperRef.current && swiperRef.current.navigation) {
            swiperRef.current.navigation.prevEl.click();
            }
        }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full hover:bg-gray-600"
        >
            <ArrowLeftCircleIcon className=' w-10 h-10' />
        </button>

        <button
        typeof='button'
        onClick={() => {
            if (swiperRef.current && swiperRef.current.navigation) {
            swiperRef.current.navigation.nextEl.click();
            }
        }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full hover:bg-gray-600"
        >
            <ArrowRightCircleIcon className=' w-10 h-10' />
        </button>
    </div>
  )
}

export default CarouselProjects