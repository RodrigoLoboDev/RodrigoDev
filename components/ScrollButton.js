import { useState, useEffect } from 'react';
import Image from 'next/image';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-5 bottom-24 z-50 p-4 bg-gray-700 rounded-full shadow-md hover:bg-gray-900 transition-colors duration-300"
        >
          <Image 
            width={25}
            height={25}
            src={'/img/arriba.png'}
            alt='Imagen Arriba'
            className=' invert'
          />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
