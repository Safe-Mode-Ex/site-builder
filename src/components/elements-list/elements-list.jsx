import Element from '../element/element';

function ElementsList({ elements, setElements }) {
  return (
    elements.map((element, index) =>
      <Element
        key={element + index}
        index={index}
        typeValue={element}
        setElements={setElements}
      />)
  );
}

export default ElementsList;