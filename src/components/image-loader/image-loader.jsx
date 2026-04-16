import useOutsideClick from '../../hooks/use-outside-click/use-outside-click';
import useImageLoader from '../../hooks/use-image-loader/use-image-loader';

function ImageLoader({ setImageSrc, setUploadingState }) {
  const [imageSrcRef, clickLoadHandler] = useImageLoader(setImageSrc, setUploadingState);

  const clickOutsideImageHandler = (isUploading) =>
    setUploadingState((state) => ({ ...state, isUploading }));

  const loadImageHandler = (evt) => {
    setImageSrc(URL.createObjectURL(evt.target.files[0]));
  };

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
          onChange={loadImageHandler}
        />
      </label>
    </div>
  );
}

export default ImageLoader;