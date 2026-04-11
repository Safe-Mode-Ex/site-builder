import { useState } from 'react';
import AddButton from '../add-button/add-button';
import ChoseElement from '../chose-element/chose-element';
import Element from '../element/element';

function Header() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [elements, setElements] = useState([]);

  return (
    <header className="header header--empty">
      {elements.length ?
        (
          <div className="header__elements-wrapper">
            {elements.map((element, index) =>
              <Element key={element + index} index={index} type={element} setElements={setElements} />)}
          </div>
        ) :
          <p className="placeholder">Header</p>}

      <AddButton isEditMode={isEditMode} setIsEditMode={setIsEditMode} />

      {isEditMode &&
        <ChoseElement
          setIsEditMode={setIsEditMode}
          setElements={setElements}
        />}
    </header>
  );
}

export default Header;