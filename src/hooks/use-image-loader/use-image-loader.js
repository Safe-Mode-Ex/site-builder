import { useRef } from 'react';

function useImageLoader(setImageSrc, setUploadingState) {
  const imageSrcRef = useRef(null);

  const clickLoadHandler = (evt) => {
    const imageSrcValue = imageSrcRef.current.value.trim();

    if (imageSrcValue) {
      evt.preventDefault();

      setImageSrc(imageSrcValue);
      setUploadingState(({ isUploading, isUploaded }) => ({
        isUploading: !isUploading,
        isUploaded: !isUploaded,
      }));
    }
  };

  return [imageSrcRef, clickLoadHandler];
}

export default useImageLoader;