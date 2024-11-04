import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'


export default function DarkMode() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!enabled) {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
  }, [enabled])

  return (
    <div className="flex gap-1 items-center">
        {!enabled ? (
            <SunIcon className='w-6 h-6 text-black ' />
        ) : (
            <MoonIcon className='w-6 h-6 text-white ' />
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
