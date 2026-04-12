import useKeyHandler from '../../hooks/use-key-handler/use-key-handler';

function ElementText() {
  const pressKeyHandler = useKeyHandler();

  return (
    <p contentEditable="true" data-placeholder="Абзац текста" onKeyDown={pressKeyHandler}></p>
  );
}

export default ElementText;