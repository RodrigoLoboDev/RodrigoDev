import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, UserIcon, BriefcaseIcon, AtSymbolIcon } from '@heroicons/react/20/solid'
import useDev from '@/hook/useDev';

export default function NavegacionMobile() {

    const { t } = useDev();

  return (
    <Popover className="relative lg:hidden">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-[0.13rem] rounded-md bg-white">
        <Bars3Icon className='w-8 h-8 text-black ' />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-3/4  lg:-translate-x-48">
          <div className="w-56 shrink rounded-xl bg-white p-2 text-sm leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5 text-center uppercase font-bold">
            <a
              href='#acercademi'
              className='p-2 hover:text-orange-400 flex gap-2 items-center justify-center'
            > 
              <UserIcon className=' w-6 h-6' />
              {t("navegacion.acercademi")}
            </a>
            <a
              href='#proyecto'
              className='p-2 hover:text-orange-400 flex gap-2 items-center justify-center'
            >
              <BriefcaseIcon className=' w-6 h-6' />
              {t("navegacion.proyectos")}
            </a>
            <a
              href='#contacto'
              className='p-2 hover:text-orange-400 flex gap-2 items-center justify-center'
            >
              <AtSymbolIcon className=' w-6 h-6' />
              {t("navegacion.contacto")}
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}