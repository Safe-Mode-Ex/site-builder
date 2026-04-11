import GridSelect from '../grid-select/grid-select';
import { useState } from 'react';
import { GridType } from '../../const';
import LayoutContent from '../layout-content/layout-content';

function App() {
  const [gridType, setGridType] = useState(GridType.Landing);

  return (
    <div className="container">
      <h1 className="visually-hidden">Конструктор сайтов</h1>
      <GridSelect gridType={gridType} setGridType={setGridType} />
      <LayoutContent gridType={gridType} />
    </div>
  );
}

export default App;
