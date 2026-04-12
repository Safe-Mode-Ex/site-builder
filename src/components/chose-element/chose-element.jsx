import { ElementType } from '../../const';
import useOutsideClick from '../../hooks/use-outside-click/use-outside-click';

function ChoseElement({ setIsEditMode, setElements }) {
  let choseRef = useOutsideClick(setIsEditMode);

  const addElementHandler = (evt) => {
    evt.stopPropagation();
    setElements((elements) => [...elements, { id: crypto.randomUUID(), type: evt.target.value }]);
  };

  return (
    <div className="choose-elem " ref={choseRef} onClick={addElementHandler}>
      <button type="button" className="choose-elem__btn" value={`${ElementType.Title} h1`}>Заголовок H1</button>
      <button type="button" className="choose-elem__btn" value={`${ElementType.Title} h2`}>Заголовок H2</button>
      <button type="button" className="choose-elem__btn" value={`${ElementType.Title} h3`}>Заголовок H3</button>
      <button type="button" className="choose-elem__btn" value={ElementType.Text}>Абзац текста</button>
      <button type="button" className="choose-elem__btn" value={ElementType.Image}>Изображение</button>
    </div>
  );
}

export default ChoseElement;