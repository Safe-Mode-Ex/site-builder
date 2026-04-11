import { useState } from 'react';
import classNames from 'classnames';
import Edit from '../edit/edit';
import ElementsList from '../elements-list/elements-list';

function Header() {
  const [elements, setElements] = useState([]);

  return (
    <header className={classNames(
      'header',
      { 'header--empty': !elements.length }
    )}>
      {elements.length ?
        (
          <div className="header__elements-wrapper">
            <ElementsList elements={elements} setElements={setElements} />
          </div>
        ) :
          <p className="placeholder">Header</p>}

      <Edit setElements={setElements} />
    </header>
  );
}

export default Header;