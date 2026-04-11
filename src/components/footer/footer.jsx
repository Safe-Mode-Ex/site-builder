import { useState } from 'react';
import Edit from '../edit/edit';
import classNames from 'classnames';
import ElementsList from '../elements-list/elements-list';

function Footer() {
  const [elements, setElements] = useState([]);

  return (
    <footer className={classNames(
      'footer',
      { 'footer--empty': !elements.length }
    )}>
      {elements.length ?
        (
          <div className="footer__elements-wrapper">
            <ElementsList elements={elements} setElements={setElements} />
          </div>
        ) :
          <p className="placeholder">Footer</p>}

      <Edit setElements={setElements} />
    </footer>
  );
}

export default Footer;