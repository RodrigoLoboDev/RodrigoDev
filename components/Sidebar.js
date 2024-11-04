import Image from "next/image"
import DarkMode from "./DarkMode";
import LanguajeMode from "./LanguajeMode";

const redesSociales = [
    {
        id: 1,
        src: 'facebook',
        link: 'https://www.facebook.com/luis.r.lobo'
    },
    {
        id: 2,
        src: 'github',
        link: 'https://github.com/RodrigoLoboDev'
    },
    {
        id: 3,
        src: 'linkedin',
        link: 'https://www.linkedin.com/in/jes%C3%BAs-luis-rodrigo-lobo-6594a81b4/'
    }
]


export default function Sidebar() {
   
  return (
    <div className="lg:w-32 flex justify-between items-center lg:block lg:space-y-20">
        <a href="/" className="nuxt-link-exact-active nuxt-link-active">
            <Image 
                width={100}
                height={100}
                src={'/img/2-transparente.png'}
                alt="Imagen Logo"
                className="dark:invert"
            />
        </a>

        <div className=" lg:space-y-5 flex gap-3 items-center lg:block">
            <LanguajeMode />
            <DarkMode />
        </div>

        <div className="flex gap-2 lg:flex-col lg:ml-5">
            {redesSociales.map( redes => (
                <div 
                    key={redes.id}
                    className="lg:h-8 lg:w-8 lg:block mb-2">
                    <a href={`${redes.link}`} target="_blank">
                        <Image 
                            width={100}
                            height={100}
                            src={`/img/${redes.src}.svg`}
                            alt={`${redes.src}`}
                            className="dark:invert w-10"
                        />
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}
