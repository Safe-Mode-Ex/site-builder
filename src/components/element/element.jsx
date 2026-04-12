import ElementTitle from '../element-title/element-title';
import ElementImage from '../element-image/element-image';
import ElementText from '../element-text/element-text';
import classNames from 'classnames';
import { useState } from 'react';
import { ElementType } from '../../const';

const elementMap = {
  [ElementType.Title]: ElementTitle,
  [ElementType.Text]: ElementText,
  [ElementType.Image]: ElementImage,
};

const INITIAL_UPLOADING_STATE = {
  isUploading: false,
  isUploaded: false,
};

function Element({ typeValue, id, setElements }) {
  const [type, tagName] = typeValue.split(' ');
  const ElementComponent = elementMap[type];
  const [{isUploading, isUploaded}, setUploadingState] = useState(INITIAL_UPLOADING_STATE);

  const deleteButtonHandler = (evt) => {
    evt.preventDefault();
    setElements((elements) => elements.filter((element) => element.id !== id));
  };

  return (
    <div className={classNames(
      `element ${type}`,
      { 'element--image': type === 'image'},
      { 'element--uploading': isUploading },
      { 'element--uploaded': isUploaded },
    )} tabIndex="0">
      <ElementComponent
        tagName={tagName}
        setUploadingState={setUploadingState}
      />

      <button type="button" className="delete-btn" onClick={deleteButtonHandler}>
        <span className="visually-hidden">Удалить элемент</span>
      </button>
    </div>
  );
}

export default Element;