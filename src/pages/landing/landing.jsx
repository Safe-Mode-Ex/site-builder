import AddButton from '../../components/add-button/add-button';
import ChoseElement from '../../components/chose-element/chose-element';

function Landing() {
  return (
    <div className="content content-1 content--empty">
      <p className="placeholder">Content</p>

      <AddButton />

      <ChoseElement />
    </div>
  );
}

export default Landing;