import { useState } from 'react';
import AddButton from '../../components/add-button/add-button';
import ChoseElement from '../../components/chose-element/chose-element';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Blog() {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="layout layout--blog">
      <Header />

      <div className="content content-1 content--empty">
        <p className="placeholder">Content</p>
        <AddButton />
        {isEditMode && <ChoseElement setIsEditMode={setIsEditMode} />}
      </div>

      <div className="content content-2 content--empty">
        <p className="placeholder">Content</p>
        <AddButton />
        {isEditMode && <ChoseElement setIsEditMode={setIsEditMode} />}
      </div>

      <Footer />
    </div>
  );
}

export default Blog;