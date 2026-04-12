import { createElement } from 'react';
import useKeyHandler from '../../hooks/use-key-handler/use-key-handler';

function ElementTitle({ tagName }) {
  const pressKeyHandler = useKeyHandler();

  return createElement(
    tagName,
    {
      contentEditable: true,
      'data-placeholder': `Заголовок ${tagName.toUpperCase()}`,
      onKeyDown: pressKeyHandler
    }
  );
}

export default ElementTitle;