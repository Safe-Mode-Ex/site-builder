import Landing from '../../pages/landing/landing';
import Blog from '../../pages/blog/blog';
import Shop from '../../pages/shop/shop';
import GridSelect from '../grid-select/grid-select';
import { useState } from 'react';
import { GridType } from '../../const';
import Header from '../header/header';
import Footer from '../footer/footer';
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
