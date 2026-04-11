import { useState } from 'react';
import AddButton from '../../components/add-button/add-button';
import ChoseElement from '../../components/chose-element/chose-element';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Landing() {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="layout layout--landing">
      <Header />

      <div className="content content-1 content--empty">
        <p className="placeholder">Content</p>
        <AddButton isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
        {isEditMode && <ChoseElement setIsEditMode={setIsEditMode} />}
      </div>

      <Footer />
    </div>
  );
}

export default Landing;