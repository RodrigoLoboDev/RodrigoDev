import useDev from "@/hook/useDev";
import { UserIcon, BriefcaseIcon, AtSymbolIcon } from '@heroicons/react/20/solid'


export default function Nav() {

    const { t } = useDev();

  return (
    <nav className="lg:flex justify-center gap-4 hidden">   
        <a
            className="enlace flex hover:-rotate-6 p-1 hover:shadow-xl transition-all hover:bg-red-400 hover:text-white dark:invert"
            href="#acercademi"
        >
            <UserIcon className=' w-6 h-6' />
            {t("navegacion.acercademi")}
        </a>
        <a
            className="enlace flex hover:-rotate-6 p-1 hover:shadow-xl transition-all hover:bg-red-400 hover:text-white dark:invert"
            href="#proyecto"
        >
            <BriefcaseIcon className=' w-6 h-6' />
            {t("navegacion.proyectos")}
        </a>
        <a
            className="enlace flex hover:-rotate-6 p-1 hover:shadow-xl transition-all hover:bg-red-400 hover:text-white dark:invert"
            href="#contacto"
        >
            <AtSymbolIcon className=' w-6 h-6' />
            {t("navegacion.contacto")}
        </a>
    </nav>
  )
}
