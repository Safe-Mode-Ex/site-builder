import { useState } from 'react';
import AddButton from '../add-button/add-button';
import ChoseElement from '../chose-element/chose-element';

function Edit({ setElements }) {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <>
      <AddButton setIsEditMode={setIsEditMode} />

      {isEditMode &&
        <ChoseElement
          setIsEditMode={setIsEditMode}
          setElements={setElements}
        />}
    </>
  );
}

export default Edit;