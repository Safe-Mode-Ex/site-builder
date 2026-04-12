import { useState } from 'react';
import ImageLoader from '../image-loader/image-loader';
import Camera from '../../assets/svg/camera/camera';

function ElementImg({ setUploadingState }) {
  const [imageSrc, setImageSrc] = useState(null);

  const clickButtonHandler = (evt) => {
    evt.stopPropagation();
    setUploadingState((state) => ({ ...state, isUploading: !state.isUploading }));
  };

  return (
    <>
      <button type="button" className="add-img-btn" onClick={clickButtonHandler}>
        <Camera />
      </button>

      {!imageSrc ?
        <ImageLoader setImageSrc={setImageSrc} setUploadingState={setUploadingState} /> :
        <img src={imageSrc} />}
    </>
  );
}

export default ElementImg;