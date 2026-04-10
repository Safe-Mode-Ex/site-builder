import AddButton from '../../components/add-button/add-button';
import ChoseElement from '../../components/chose-element/chose-element';

function Shop() {
  return (
    <>
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
    </>
  );
}

export default Shop;