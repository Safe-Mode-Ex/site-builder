import EditableSection from '../../components/editable-section/editable-section';
import { PlaceHolder } from '../../const';

function Landing() {
  return (
    <div className="layout layout--landing">
      <EditableSection as="header" classList="header" placeholder={PlaceHolder.Header} />
      <EditableSection classList="content content-1" placeholder={PlaceHolder.Content} />
      <EditableSection as="footer" classList="footer" placeholder={PlaceHolder.Footer} />
    </div>
  );
}

export default Landing;