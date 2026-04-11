import { useState } from 'react';
import classNames from 'classnames';
import Edit from '../edit/edit';
import ElementsList from '../elements-list/elements-list';

function EditableSection({ as: Component = 'div', classList, placeholder }) {
  const [elements, setElements] = useState([]);
  const baseClass = classList.split(' ')[0];

  return (
    <Component className={classNames(
      classList,
      { [`${baseClass}--empty`]: !elements.length }
    )}>
      {elements.length ? (
        <div className={`${baseClass}__elements-wrapper`}>
          <ElementsList elements={elements} setElements={setElements} />
        </div>
      ) : (
        <p className="placeholder">{placeholder}</p>
      )}

      <Edit setElements={setElements} />
    </Component>
  );
}

export default EditableSection;