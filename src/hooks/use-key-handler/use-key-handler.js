import { KEY_ENTER_CODE } from '../../const';

function useKeyHandler() {
  return (evt) => {
    if (evt.code === KEY_ENTER_CODE) {
      evt.preventDefault();
      evt.target.blur();
    }
  };
}

export default useKeyHandler;