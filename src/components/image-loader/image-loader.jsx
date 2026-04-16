import useOutsideClick from '../../hooks/use-outside-click/use-outside-click';
import useImageLoader from '../../hooks/use-image-loader/use-image-loader';
import { BYTES_PER_UNIT, MAX_UPLOAD_IMAGE_SIZE_MB } from '../../const';

const bytesPerMb = BYTES_PER_UNIT ** 2;
const maxUploadImageSizeByte = MAX_UPLOAD_IMAGE_SIZE_MB * bytesPerMb;

function ImageLoader({ setImageSrc, setUploadingState }) {
  const [imageSrcRef, clickLoadHandler] = useImageLoader(setImageSrc, setUploadingState);

  const clickOutsideImageHandler = (isUploading) =>
    setUploadingState((state) => ({ ...state, isUploading }));

  const loadImageHandler = ({ target }) => {
    const file = target.files[0];

    if (file.size > maxUploadImageSizeByte) {
      alert(`Максимальный размер файла - ${maxUploadImageSizeByte / bytesPerMb } Мб`);
      return;
    }

    setImageSrc(URL.createObjectURL(target.files[0]));
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
          size={maxUploadImageSizeByte}
          onChange={loadImageHandler}
        />
      </label>
    </div>
  );
}

export default ImageLoader;