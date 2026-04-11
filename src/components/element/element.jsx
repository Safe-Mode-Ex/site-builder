import ElementH1 from '../element-h1/element-h1';
import ElementH2 from '../element-h2/element-h2';
import ElementH3 from '../element-h3/element-h3';
import ElementImg from '../element-img/element-img';
import ElementP from '../element-p/element-p';

const elementMap = {
  h1: ElementH1,
  h2: ElementH2,
  h3: ElementH3,
  p: ElementP,
  img: ElementImg,
};

function Element({ type, index, setElements }) {
  const ElementComponent = elementMap[type];

  const deleteButtonHandler = (evt) => {
    evt.preventDefault();

    setElements((elements) =>
      [...elements.slice(0, index), ...elements.slice(index + 1, elements.length)]);
  };

  return (
    <div className="element title" tabIndex="0">
      <ElementComponent />

      <button type="button" className="delete-btn" onClick={deleteButtonHandler}>
        <span className="visually-hidden">Удалить элемент</span>
      </button>
    </div>
  );
}

export default Element;