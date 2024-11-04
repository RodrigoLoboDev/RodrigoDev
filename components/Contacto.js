import useDev from "@/hook/useDev";
import { MapPinIcon, AtSymbolIcon } from '@heroicons/react/20/solid'

export default function Contacto() {
  const { t } = useDev();

  return (
    <div id="contacto" className="mt-5 lg:mt-10">
      <div className="space-y-1">
        <h2 className="font-black text-xl lg:text-2xl text-gray-600 dark:text-gray-300 flex gap-1 items-center">
          <AtSymbolIcon className=' w-7 h-7' />
          {t("contacto.h2")}
        </h2>
        <p className="text-gray-400 dark:text-gray-200">
          {t("contacto.p1")}
        </p>
        <div className="flex">
          <div className="bg-orange-600 rounded-full py-1 px-1"></div>
          <div className="bg-orange-600 pt-1 lg:w-1/6 w-2/6 rounded-lg"></div>
        </div>
      </div>

      {/* Información adicional sobre ti */}
      <div className="mt-5 space-y-5">
        <div className="text-gray-700 dark:text-gray-200">
          <p>{t("contacto.p2")}</p>
        </div>

        <div className=" flex gap-2 items-center dark:text-white">
          <MapPinIcon className="w-8 h-8 dark:text-white" />
          Tucumán - Argentina
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240360.651718976!2d-69.83685651198029!3d-27.61422168254192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1730713272463!5m2!1ses!2sar" className=" border-0 w-full h-auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </div>
    </div>
  );
}
