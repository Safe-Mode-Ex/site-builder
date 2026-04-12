import EditableSection from '../../components/editable-section/editable-section';
import { ContentCount, PlaceHolder } from '../../const';

function Blog() {
  return (
    <div className="layout layout--blog">
      <EditableSection as="header" classList="header" placeholder={PlaceHolder.Header} />

      {new Array(ContentCount.Blog).fill(null).map((_, index) => (
        <EditableSection
          key={`content-${index + 1}`}
          classList={`content content-${index + 1}`}
          placeholder={PlaceHolder.Content}
        />
      ))}

      <EditableSection as="footer" classList="footer" placeholder={PlaceHolder.Footer} />
    </div>
  );
}

export default Blog;