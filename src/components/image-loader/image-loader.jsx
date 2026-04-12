import { useRef } from 'react';
import useOutsideClick from '../../hooks/use-outside-click/use-outside-click';

function ImageLoader({ setImageSrc, setUploadingState }) {
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

  const clickOutsideImageHandler = (isUploading) =>
    setUploadingState((state) => ({ ...state, isUploading }));

  const ref = useOutsideClick(clickOutsideImageHandler);

  return (
    <div className="img-upload" ref={ref}>
      <p>Загрузите изображение</p>
      <input
        ref={imageSrcRef}
        type="url"
        placeholder="Вставьте ссылку на изображение"
      />
      <label className="img-upload__label" onClick={clickLoadHandler}
      >Загрузить
        <input
          className="visually-hidden"
          type="file"
          accept="image/png, image/jpeg"
        />
      </label>
    </div>
  );
}

export default ImageLoader;