import { useState } from 'react';
import AddButton from '../../components/add-button/add-button';
import ChoseElement from '../../components/chose-element/chose-element';
import EditableSection from '../../components/editable-section/editable-section';
import { PlaceHolder } from '../../const';

function Landing() {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="layout layout--landing">
      <EditableSection as="header" block="header" placeholder={PlaceHolder.Header} />

      <div className="content content-1 content--empty">
        <p className="placeholder">Content</p>
        <AddButton isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
        {isEditMode && <ChoseElement setIsEditMode={setIsEditMode} />}
      </div>

      <EditableSection as="footer" block="footer" placeholder={PlaceHolder.Footer} />
    </div>
  );
}

export default Landing;