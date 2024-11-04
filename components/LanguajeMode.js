import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import useDev from '@/hook/useDev';


export default function LanguajeMode() {
  const [enabled, setEnabled] = useState(false)
  const { i18n } = useDev();

  useEffect(() => {
    if (!enabled) {
        i18n.changeLanguage("es")
    } else {
        i18n.changeLanguage("en")
    }
  }, [enabled])

  return (
    <div className="flex gap-1 items-center">
        {!enabled ? (
            <p className=' font-bold text-xl dark:text-white'>ES</p>
        ) : (
            <p className=' font-bold text-xl dark:text-white'>EN</p>
        )}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-teal-900 dark:bg-white' : 'bg-teal-700 dark:bg-white'}
          relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white dark:bg-slate-700 shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
