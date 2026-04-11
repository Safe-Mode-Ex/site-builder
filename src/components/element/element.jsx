import ElementTitle from '../element-title/element-title';
import ElementImg from '../element-img/element-img';
import ElementText from '../element-text/element-text';

const elementMap = {
  title: ElementTitle,
  text: ElementText,
  img: ElementImg,
};

function Element({ typeValue, index, setElements }) {
  const [type, tagName] = typeValue.split(' ');
  const ElementComponent = elementMap[type];

  const deleteButtonHandler = (evt) => {
    evt.preventDefault();

    setElements((elements) =>
      [...elements.slice(0, index), ...elements.slice(index + 1, elements.length)]);
  };

  return (
    <div className={`element ${type}`} tabIndex="0">
      <ElementComponent tagName={tagName} />

      <button type="button" className="delete-btn" onClick={deleteButtonHandler}>
        <span className="visually-hidden">Удалить элемент</span>
      </button>
    </div>
  );
}

export default Element;