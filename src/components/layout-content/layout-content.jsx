import { GridType } from '../../const';
import Blog from '../../pages/blog/blog';
import Landing from '../../pages/landing/landing';
import Shop from '../../pages/shop/shop';
import Footer from '../footer/footer';
import Header from '../header/header';

const layoutCmpMap = {
  [GridType.Landing]: Landing,
  [GridType.Blog]: Blog,
  [GridType.Shop]: Shop,
};

function LayoutContent({ gridType }) {
  const Component = layoutCmpMap[gridType];
  return Component ? <Component /> : null;
}

export default LayoutContent;