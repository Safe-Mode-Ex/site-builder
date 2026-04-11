import AddButton from '../../components/add-button/add-button';
import ChoseElement from '../../components/chose-element/chose-element';
import EditableSection from '../../components/editable-section/editable-section';
import { PlaceHolder } from '../../const';

function Shop() {
  return (
    <div className="layout layout--shop">
      <EditableSection as="header" block="header" placeholder={PlaceHolder.Header} />

      <div className="content content-1 content--empty">
        <p className="placeholder">Content</p>
        <AddButton />
        <ChoseElement />
      </div>

      <div className="content content-2 content--empty">
        <p className="placeholder">Content</p>
        <AddButton />
        <ChoseElement />
      </div>

      <div className="content content-3 content--empty">
        <p className="placeholder">Content</p>
        <AddButton />
        <ChoseElement />
      </div>

      <EditableSection as="footer" block="footer" placeholder={PlaceHolder.Footer} />
    </div>
  );
}

export default Shop;