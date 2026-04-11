import { useState } from 'react';
import classNames from 'classnames';
import Edit from '../edit/edit';
import ElementsList from '../elements-list/elements-list';

function EditableSection({ as: Component = 'div', block, placeholder }) {
  const [elements, setElements] = useState([]);

  return (
    <Component className={classNames(
      block,
      { [`${block}--empty`]: !elements.length }
    )}>
      {elements.length ? (
        <div className={`${block}__elements-wrapper`}>
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