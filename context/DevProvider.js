import { createContext } from 'react'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

const DevContext = createContext()

const DevProvider = ({children}) => {

    const [modal, setModal] = useState(false)

    const [ t, i18n ] = useTranslation("global");

    const handleChangeModal = () => {
        setModal(!modal);
    }

    useEffect(() => {
        scrollNav()
    }, [])
    


    // Smooth Scroll
    function scrollNav() {
        const enlaces = document.querySelectorAll('.enlace');
        console.log(enlaces);

        enlaces.forEach( enlace => {
            enlace.addEventListener('click', function(e) {
                e.preventDefault();

                console.log(e.target.attributes.href.value);
                const seccionScroll = e.target.attributes.href.value;
                const seccion = document.querySelector(seccionScroll);
                seccion.scrollIntoView({behavior: "smooth"});
            });
        });
    }   
    
    return (
        <DevContext.Provider
            value={{
                modal,
                handleChangeModal,
                t,
                i18n
            }}
        >
            {children}
        </DevContext.Provider>
    )
}

export {
    DevProvider
}
export default DevContext