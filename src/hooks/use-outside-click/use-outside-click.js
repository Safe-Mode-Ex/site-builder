import { useEffect, useRef } from 'react';

function useOutsideClick(setIsEditMode) {
  const choseRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (evt) => {
      if (
        evt.target instanceof HTMLElement &&
        choseRef.current &&
        !choseRef.current.contains(evt.target)
      ) {
        setIsEditMode(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [setIsEditMode]);

  return choseRef;
}

export default useOutsideClick;