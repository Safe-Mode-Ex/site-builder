import AddButton from '../../components/add-button/add-button';
import ChoseElement from '../../components/chose-element/chose-element';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function Shop() {
  return (
    <div className="layout layout--shop">
      <Header />

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

      <Footer />
    </div>
  );
}

export default Shop;