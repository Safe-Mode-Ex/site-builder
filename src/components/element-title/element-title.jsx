import { createElement } from 'react';

function ElementTitle({ tagName }) {
  return createElement(
    tagName,
    {
      contentEditable: true,
      'data-placeholder': `Заголовок ${tagName.toUpperCase()}`
    }
  );
}

export default ElementTitle;