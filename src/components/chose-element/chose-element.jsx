import useOutsideClick from '../../hooks/use-outside-click/use-outside-click';

function ChoseElement({ setIsEditMode, setElements }) {
  const choseRef = useOutsideClick(setIsEditMode);

  const addElementHandler = (evt) => {
    evt.preventDefault();
    setElements((elements) => [...elements, evt.target.value]);
  };

  return (
    <div className="choose-elem " ref={choseRef} onClick={addElementHandler}>
      <button type="button" className="choose-elem__btn" value="h1">Заголовок H1</button>
      <button type="button" className="choose-elem__btn" value="h2">Заголовок H2</button>
      <button type="button" className="choose-elem__btn" value="h3">Заголовок H3</button>
      <button type="button" className="choose-elem__btn" value="p">Абзац текста</button>
      <button type="button" className="choose-elem__btn" value="img">Изображение</button>
    </div>
  );
}

export default ChoseElement;