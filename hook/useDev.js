import { useContext } from 'react'
import DevContext from '@/context/DevProvider'

const useDev = () => {
    return useContext(DevContext)
}

export default useDev