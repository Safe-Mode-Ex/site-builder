import Element from '../element/element';

function ElementsList({ elements, setElements }) {
  return (
    elements.map((element) =>
      <Element
        key={element.id}
        id={element.id}
        typeValue={element.type}
        setElements={setElements}
      />)
  );
}

export default ElementsList;