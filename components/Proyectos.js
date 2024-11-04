import useDev from '@/hook/useDev'
import CarouselProjects from './CarouselProjects'
import { BriefcaseIcon } from '@heroicons/react/20/solid'

 
export default function Proyectos() {

  const { t } = useDev()
  
  return (
    <div id='proyecto' className='mt-20'>
        <div className='space-y-1'>
          <h2 className='font-black text-xl lg:text-2xl text-gray-600 dark:text-gray-300 flex gap-1 items-center'>
            <BriefcaseIcon className=' w-7 h-7' />
            {t("proyectos.h2")}
          </h2>
          <p className=' text-gray-400 dark:text-gray-200 italic'>{t("proyectos.p1")}</p>
          <div className='flex'>
              <div className=' bg-orange-600 rounded-full py-1 px-1 '></div>
              <div className=' bg-orange-600 pt-1 lg:w-1/6 w-2/6 rounded-lg '></div>
          </div>
        </div>

        <div className="lg:w-[90%] mx-auto pt-11">
          <CarouselProjects />
        </div>
        
    </div>
  )
}
