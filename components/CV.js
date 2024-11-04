import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'

const CV = () => {
  return (
    <a href="/cv.pdf" download="CV_RodrigoLobo" className="flex gap-2 p-2 bg-green-700 text-white rounded hover:bg-green-900 transition-all shadow-lg font-bold justify-center mt-4 md:mt-0">
        <ArrowDownTrayIcon className=" w-6 h-6" />
        Descargar CV
    </a>
  )
}

export default CV