import AddButton from '../add-button/add-button';
import ChoseElement from '../chose-element/chose-element';

function Header() {
  return (
    <header className="header header--empty">
      <p className="placeholder">Header</p>
      <AddButton />
      <ChoseElement />
    </header>
  );
}

export default Header;